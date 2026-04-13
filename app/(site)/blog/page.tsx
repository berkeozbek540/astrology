import { db } from "@/lib/db";
import BlogListTable from "@/components/blog/BlogListTable";

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-brand-cream min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-dark italic">Blog</h1>
          <p className="text-brand-gold mt-4 tracking-widest uppercase text-sm">
            Gökyüzünden Notlar
          </p>
        </header>

        <BlogListTable posts={posts} />
      </div>
    </div>
  );
}
