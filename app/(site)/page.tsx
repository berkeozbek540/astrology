import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PageTransition from "@/components/layout/PageTransition";

const HomePage = () => {
  return (
    <PageTransition>
      <div className="container mx-auto p-8 mb-8">
        <Hero />
        <Banner />
        <Services />
        <Blog />
      </div>
    </PageTransition>
  );
};

export default HomePage;
