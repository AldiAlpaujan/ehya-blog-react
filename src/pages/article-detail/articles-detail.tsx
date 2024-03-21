/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import ArticleContentSection from "./Section/ArticleContentSection";
import CommentSection from "./Section/CommentSection";
import LatestArticleSection from "./Section/LatestArticleSection";
import ArticleDetailContextProvider from "../../context/ArticleDetailContext";

const ArticleDetailPage = () => {
    const { id } = useParams();
    return (
        <PageLayout>
            <ArticleDetailContextProvider>
                <ArticleContentSection id={Number.parseInt(id!)} />
                <CommentSection />
                <LatestArticleSection />
            </ArticleDetailContextProvider>
        </PageLayout>
    );
}

export default ArticleDetailPage;