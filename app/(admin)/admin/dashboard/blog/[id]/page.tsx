import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";

type Props = {
  params: Promise<{ id: string }>;
};

const EditPostPage = async ({ params }: Props) => {
  const session = await auth();
  if (!session) redirect("/admin");

  const { id } = await params;
  const post = await db.post.findUnique({
    where: { id: Number(id) },
  });

  if (!post) notFound();

  return <PostEditor post={post} />;
};

export default EditPostPage;
