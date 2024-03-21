import { createContext, useState } from "react";
import { Article } from "../model/article";
import { childrenType } from "../utils/type";

interface ProviderValue {
    article: Article | null,
    setArticle: (value: Article | null) => void,
}

const ArticleDetailContext = createContext<ProviderValue | null>(null);

const ArticleDetailContextProvider = (props: { children: childrenType }) => {
    const [article, setArticle] = useState<Article | null>(null);
    return (
        <ArticleDetailContext.Provider value={{ article, setArticle }}>
            {props.children}
        </ArticleDetailContext.Provider>
    );
}

export { ArticleDetailContext }
export default ArticleDetailContextProvider;