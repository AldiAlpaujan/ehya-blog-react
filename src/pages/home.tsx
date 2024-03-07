import PageLayout from "../components/Layout/PageLayout";
import HeroSection from "../components/Section/Home/HeroSection";
import ArticleSection from "../components/Section/Home/ArticleSection";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ArticleSection />
    </PageLayout>
  );
};


export default HomePage;
