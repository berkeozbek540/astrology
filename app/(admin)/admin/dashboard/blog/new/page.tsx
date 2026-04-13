import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";

const NewPostPage = async () => {
  const session = await auth();
  if (!session) redirect("/admin");

  return <PostEditor />;
};

export default NewPostPage;
