"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Post = {
  id?: number;
  title: string;
  description: string;
  content: string;
  category: string;
  coverImage?: string | null;
  published: boolean;
};

const CATEGORIES = ["Burçlar", "Tarot", "Astroloji", "Numeroloji", "Genel"];

const PostEditor = ({ post }: { post?: Post }) => {
  const router = useRouter();
  const isEditing = !!post?.id;

  const [title, setTitle] = useState(post?.title ?? "");
  const [description, setDescription] = useState(post?.description ?? "");
  const [category, setCategory] = useState(post?.category ?? CATEGORIES[0]);
  const [coverImage, setCoverImage] = useState(post?.coverImage ?? "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: post?.content ?? "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[400px] p-4 focus:outline-none prose prose-sm max-w-none",
      },
    },
  });

  // Kapak fotoğrafı upload
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const { url } = await res.json();
      setCoverImage(url);
      toast.success("Fotoğraf yüklendi");
    } catch {
      toast.error("Fotoğraf yüklenemedi");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (publishedState: boolean) => {
    if (!title || !editor?.getHTML()) {
      toast.error("Başlık ve içerik zorunlu");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/posts", {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: post?.id,
          title,
          description,
          content: editor?.getHTML(),
          category,
          coverImage,
          published: publishedState,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success(isEditing ? "Yazı güncellendi" : "Yazı oluşturuldu");
      router.push("/admin/dashboard/blog");
      router.refresh();
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif">{isEditing ? "Yazıyı Düzenle" : "Yeni Yazı"}</h1>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => handleSubmit(false)} disabled={isSubmitting}>
            Taslak Kaydet
          </Button>
          <Button
            onClick={() => handleSubmit(true)}
            disabled={isSubmitting}
            className="bg-koyu text-krem hover:bg-kahve">
            {isSubmitting ? "Kaydediliyor..." : "Yayınla"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label className="text-sm text-kahve font-medium mb-1 block">Başlık</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Yazı başlığı..."
            className="text-lg border-altin/20"
          />
        </div>
        <div>
          <label className="text-sm text-kahve font-medium mb-1 block">Kısa Açıklama</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Blog listesinde görünecek kısa açıklama..."
            rows={2}
            className="border-altin/20 resize-none"
          />
        </div>
        <div>
          <label className="text-sm text-kahve font-medium mb-1 block">Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-altin/20 rounded-md px-3 py-2 text-sm bg-background">
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-kahve font-medium mb-1 block">Kapak Fotoğrafı</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverUpload}
            className="text-sm text-gray-500"
          />
          {isUploading && <p className="text-xs text-kahve mt-1">Yükleniyor...</p>}
          {coverImage && (
            <img
              src={coverImage}
              alt="Kapak"
              className="mt-2 h-32 w-auto rounded-md object-cover"
            />
          )}
        </div>
        <div>
          <label className="text-sm text-kahve font-medium mb-1 block">İçerik</label>
          <div className="flex gap-2 border border-altin/20 border-b-0 rounded-t-md p-2 bg-bej/20">
            {[
              {
                label: "B",
                action: () => editor?.chain().focus().toggleBold().run(),
                title: "Kalın",
              },
              {
                label: "I",
                action: () => editor?.chain().focus().toggleItalic().run(),
                title: "İtalik",
              },
              {
                label: "H2",
                action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
                title: "Başlık",
              },
              {
                label: "H3",
                action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
                title: "Alt Başlık",
              },
              {
                label: "• Liste",
                action: () => editor?.chain().focus().toggleBulletList().run(),
                title: "Liste",
              },
            ].map(({ label, action, title }) => (
              <button
                key={label}
                onClick={action}
                title={title}
                className="px-2 py-1 text-xs rounded hover:bg-bej transition-colors font-medium text-kahve">
                {label}
              </button>
            ))}
          </div>

          <div className="border border-altin/20 rounded-b-md">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
