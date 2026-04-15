import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: BlogDetailProps) => {
  const { slug } = await params;
  const Blog = await db.post.findUnique({
    where: { slug: slug },
  });

  if (!Blog) {
    notFound();
  }

  const imageUrl = Blog.coverImage
    ? `${Blog.coverImage}?width=800&height=400`
    : "/default-placeholder.png";

  return (
    <div className="container mx-auto p-8">
      <div></div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-kahve hover:text-koyu transition-colors duration-200 mb-4">
        <ChevronLeft className="w-4 h-4" />
        Tüm Bloglar
      </Link>
      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-16 shadow-2xl border max-w-4xl border-zinc-100 dark:border-zinc-800 mx-auto">
        <div className="relative">
          <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl">
            <Image src={imageUrl} alt={Blog.title} fill unoptimized />
          </div>
          <div className="bg-kahve text-white px-6 py-3 rounded-full w-max  absolute top-5 left-5">
            {Blog.category}
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-500">{Blog.createdAt.toLocaleDateString("tr-TR")}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-white leading-tight mb-6">
            {Blog.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: Blog.content }}
            className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
