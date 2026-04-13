"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Post = {
  id: number;
  title: string;
  category: string;
  published: boolean;
  createdAt: Date;
};

const PostsTable = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;

    setDeletingId(id);
    try {
      const res = await fetch("/api/admin/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error();

      toast.success("Yazı silindi");
      router.refresh();
    } catch {
      toast.error("Yazı silinemedi");
    } finally {
      setDeletingId(null);
    }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        Henüz yazı yok.{" "}
        <Link href="/admin/dashboard/new" className="text-kahve underline">
          İlk yazıyı oluştur
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-xl border border-altin/10 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-lg text-koyu leading-tight">{post.title}</h3>
              <span
                className={`px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                  post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}>
                {post.published ? "Yayında" : "Taslak"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString("tr-TR")}</span>
            </div>

            <div className="flex gap-2 border-t border-altin/5 pt-3">
              <Link
                href={`/admin/dashboard/blog/${post.id}`}
                className="flex-1 text-center py-2 text-sm font-medium bg-bej/30 text-kahve rounded-md hover:bg-bej/50 transition-colors">
                Düzenle
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                disabled={deletingId === post.id}
                className="flex-1 py-2 text-sm font-medium bg-red-400 text-white rounded-md hover:bg-red-600 transition-colors disabled:opacity-50">
                {deletingId === post.id ? "..." : "Sil"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <table className="w-full text-sm hidden md:table">
        <thead>
          <tr className="border-b border-altin/20 text-left text-kahve">
            <th className="pb-3 font-medium">Başlık</th>
            <th className="pb-3 font-medium">Kategori</th>
            <th className="pb-3 font-medium">Durum</th>
            <th className="pb-3 font-medium">Tarih</th>
            <th className="pb-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="border-b border-altin/10 hover:bg-bej/20 transition-colors">
              <td className="py-4 font-medium">{post.title}</td>
              <td className="py-4 text-gray-500">{post.category}</td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                  {post.published ? "Yayında" : "Taslak"}
                </span>
              </td>
              <td className="py-4 text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("tr-TR")}
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3 justify-end">
                  <Link
                    href={`/admin/dashboard/blog/${post.id}`}
                    className="text-kahve hover:text-koyu transition-colors">
                    Düzenle
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deletingId === post.id}
                    className="bg-red-400 text-white px-4 py-1 rounded-md hover:bg-red-600 cursor-pointer transition-colors disabled:opacity-50">
                    {deletingId === post.id ? "Siliniyor..." : "Sil"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
