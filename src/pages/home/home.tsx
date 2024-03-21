import PageLayout from "../../components/Layout/PageLayout";
import HeroSection from "./Section/HeroSection";
import ArticleSection from "../../components/Section/ArticleSection";
import CTASection from "./Section/CTASection";

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
