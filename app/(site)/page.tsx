import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PageTransition from "@/components/layout/PageTransition";
import { db } from "@/lib/db";

const HomePage = async () => {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <PageTransition>
      <div className="container mx-auto p-8 mb-8">
        <Hero />
        <Banner />
        <Services />
        <Blog posts={posts} />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default HomePage;
