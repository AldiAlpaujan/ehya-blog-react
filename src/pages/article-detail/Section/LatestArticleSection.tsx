/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Article } from "../../../model/article";
import { articlessData } from "../../../data/article-dummy-data";

const LatestArticleSection = (props: { className?: string }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const tags = [
        'Medical',
        'Lifestyle',
        'Learn',
        'Healthy',
        'Food',
        'Diet',
        'Education',
    ];

    const getLatestArticles = () => {
        const tmp = [];
        for (const item of articlessData) {
            tmp.push(item);
            if (tmp.length === 5) break;
        }
        setArticles(tmp);
    }

    useEffect(() => {
        getLatestArticles();
    }, [])

    return (
        <section className={`w-full pt-[10px] mb-[52px] ${props.className} lg:pt-10`}>
            <div className="w-full px-[17px] py-[18px] bg-white rounded-lg shadow-[#0741D21A_0px_9px_30px] 
                md:p-6">
                <h1 className="mb-5 font-roboto text-base text-dark-hard font-bold md:text-xl">
                    Latest Article
                </h1>
                <div className="flex flex-wrap gap-y-5">
                    {
                        articles.map((value, i) => (
                            <Card key={i} article={value} />
                        ))
                    }
                </div>
                <h1 className="mb-4 mt-7 font-roboto text-base text-black font-bold md:text-xl">
                    Tags
                </h1>
                <div className="flex flex-wrap gap-3">
                    {
                        tags.map((value, i) => (
                            <Tag key={i} tag={value} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const Card = (props: { article: Article }) => {
    const { article } = props;
    return (
        <div className="w-full flex md:w-1/2 lg:w-full">
            <div className="w-[58px] h-[58px] mr-4 rounded-xl overflow-auto bg-slate-600
                md:w-20 md:h-20 md:wr-5">
                <img
                    src={article.image}
                    alt="article img"
                    className="w-full h-full object-cover" />
            </div>
            <div>
                <h5 className="mb-1 font-roboto text-sm font-medium text-dark-hard
                    md:text-base md:mb-2 xl:text-lg">
                    {article.title}
                </h5>
                <p className="text-[12px] font-light">
                    Jun 27, 2022
                </p>
            </div>
        </div>
    );
}

const Tag = (props: { tag: string }) => {
    return (
        <div className="px-3 py-2 rounded-md bg-primary text-white md:py-[10px] md:px-[13px]">
            <p className="text-[10px] md:text-sm">
                {props.tag}
            </p>
        </div>
    );
}

export default LatestArticleSection;