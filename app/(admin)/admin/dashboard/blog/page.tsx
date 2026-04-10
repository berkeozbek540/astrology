import { db } from "@/lib/db";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PostsTable from "@/components/admin/PostsTable";

const DashboardPage = async () => {
  const session = await auth();
  if (!session) redirect("/admin");

  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto p-8 md:mt-0">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif">Blog Yazıları</h1>
        <Link
          href="/admin/dashboard/blog/new"
          className="bg-koyu text-krem px-4 py-2 rounded-lg text-sm hover:bg-kahve transition-colors">
          + Yeni Yazı
        </Link>
      </div>
      <PostsTable posts={posts} />
    </div>
  );
};

export default DashboardPage;
