/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import ArticleContentSection from "./Section/ArticleContentSection";
import CommentSection from "./Section/CommentSection";
import LatestArticleSection from "./Section/LatestArticleSection";
import ArticleDetailContextProvider from "../../context/ArticleDetailContext";
import SectionLayout from "../../components/Layout/SectionLayout";

const ArticleDetailPage = () => {
    const { id } = useParams();
    return (
        <PageLayout >
            <ArticleDetailContextProvider>
                <SectionLayout className="grid grid-cols-12">
                    <ArticleContentSection
                        id={Number.parseInt(id!)}
                        className="col-span-12 order-1 lg:col-span-7 xl:col-span-8 lg:pr-6 xl:pr-10" />
                    <CommentSection
                        className="col-span-12 order-2 lg:order-3 lg:col-span-7 xl:col-span-8 lg:pr-6 xl:pr-10" />
                    <LatestArticleSection
                        className="col-span-12 order-3 lg:order-2 lg:col-span-5 xl:col-span-4" />
                </SectionLayout>
            </ArticleDetailContextProvider>
        </PageLayout>
    );
}

export default ArticleDetailPage;