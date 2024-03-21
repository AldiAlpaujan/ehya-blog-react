/* eslint-disable react-hooks/exhaustive-deps */
import SectionLayout from "../Layout/SectionLayout";
import { ArticlessData } from "../../data/article-dummy-data";
import { useEffect, useState } from "react";
import { Article } from "../../model/article";
import ArticleCard from "../Elements/ArticleCard";
import OutlineButton from "../Elements/OutlineButton";

const ArticleSection = () => {
    const [articless, setArticless] = useState<Article[]>([]);

    useEffect(() => {
        setArticless(ArticlessData);
    }, []);

    return (
        <SectionLayout className="my-10">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 2xl:columns-4 [&>div:not(:first-child)]:mt-5">
                {
                    ...articless.map((value, i) => (
                        <ArticleCard key={i} article={value} />)
                    )
                }
            </div>
            <div className="w-full flex justify-center pt-12">
                <OutlineButton className="rounded-lg py-3 px-6 border-[3px]">
                    <div className="flex items-center justify-center font-bold">
                        <p className="mr-3">More Articless</p>
                        <svg className="w-[14px] h-[14px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </div>
                </OutlineButton>
            </div>
        </SectionLayout>
    );
}

export default ArticleSection;