/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import SectionLayout from "../../../components/Layout/SectionLayout";
import { ArticleDetailContext } from "../../../context/ArticleDetailContext";
import { articlessData } from "../../../data/article-dummy-data";

const ArticleContentSection = (props: { id: number }) => {
    const { id } = props;
    const { setArticle } = useContext(ArticleDetailContext)!;

    const getArticleDetail = () => {
        const data = articlessData;
        const article = data.find((value) => value.id === id);
        setArticle(article!);
    };

    useEffect(() => {
        getArticleDetail();
    }, []);

    return (
        <SectionLayout className="pt-4">
            <BreadCrumb />
            <HeaderContent />
        </SectionLayout>
    );
}

const BreadCrumb = () => {
    const { article } = useContext(ArticleDetailContext)!;
    return (
        <>
            <ul className="mb-4 flex gap-2 text-sm text-[#808080] md:mb-[29px]">
                <li className="hover:cursor-pointer" >Home</li>
                <span>/</span>
                <li>Blog</li>
                <span>/</span>
                <li className="line-clamp-1">{article?.title}</li>
            </ul>
        </>
    );
}

const HeaderContent = () => {
    const { article } = useContext(ArticleDetailContext)!;

    const getContents = (): string[] => {
        const data = article?.content.split('\n') ?? [];
        return data?.filter((value) => value != '');
    }

    return (
        <div>
            <img
                src={article?.image}
                alt="article-img"
                className="mb-5 w-full rounded-xl md:mb-[25px]" />
            <h3 className="mb-4 font-roboto text-primary text-sm tracking-widest md:mb-5 md:text-base">
                {article?.category!.toLocaleUpperCase()}
            </h3>
            <h1 className="mb-5 font-roboto text-dark-hard text-[22px] font-bold md:mb-[26px] md:text-[26px]">
                {article?.title}
            </h1>
            {
                getContents().map((value, i) => (
                    <p key={i} className="text-base text-dark-soft font-light">
                        {value}
                        <br />
                        {i !== (getContents().length - 1) && <br />}
                    </p>
                ))
            }
        </div>
    );
}

export default ArticleContentSection;