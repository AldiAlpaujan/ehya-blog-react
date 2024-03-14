import PageLayout from "../components/Layout/PageLayout";
import HeroSection from "../components/Section/Home/HeroSection";
import ArticleSection from "../components/Section/Home/ArticleSection";
import CTASection from "../components/Section/Home/CTASection";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ArticleSection />
      <CTASection />
    </PageLayout>
  );
};


export default HomePage;
