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
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif">Anasayfa</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
