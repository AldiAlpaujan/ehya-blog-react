import { Article, AuthorArticle } from "../../../model/article";

const ArticleCard = (props: { article: Article }) => {
    const { article } = props;
    const author = article.author;
    return (
        // card
        <div className="w-full">
            {/* box */}
            <div className="rounded-lg align-top bg-white overflow-hidden border border-[#E5EAF4]
                sm:border-none sm:shadow-[#0000000F_0px_9px_30px] hover:cursor-pointer group" >

                <div className="mb-6 w-full h-[200px] overflow-hidden">
                    <img
                        src={article.image}
                        alt="article image"
                        className="h-full object-cover transition-all duration-300 group-hover:scale-125" />
                </div>

                <div className="mx-5 mb-6">
                    <h4 className="font-roboto font-bold text-dark-soft text-xl mb-3
                        md:text-2xl" >
                        {article.title}
                    </h4>
                    <p className="text-base text-dark-light mb-6">
                        {article.subtitle}
                    </p>
                    <AuthorCard author={author} date={article.date} />
                </div>
            </div>
        </div>
    );
}

const AuthorCard = (props: { author: AuthorArticle, date: string }) => {
    const { author, date } = props;
    return (
        <div className="flex items-center justify-between">
            <div className="flex">
                <img
                    src={author.image}
                    alt="author image"
                    className="h-9 w-9 mr-4 rounded-full" />
                <div>
                    <h5 className="text-sm font-bold text-dark-soft italic mb-1" >
                        {author.name}
                    </h5>
                    <div className="flex">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icon  2">
                                <circle id="Oval" opacity="0.15" cx="12" cy="12" r="12" fill="#36B37E" />
                                <path id="Icon" d="M10.3989 15.8242L7.13721 12.582C7.04606 12.4909 7.00049 12.3737 7.00049 12.2305C7.00049 12.0872 7.04606 11.97 7.13721 11.8789L7.85986 11.1758C7.95101 11.0716 8.06494 11.0195 8.20166 11.0195C8.33838 11.0195 8.45882 11.0716 8.56298 11.1758L10.7505 13.3633L15.438 8.67578C15.5421 8.57161 15.6626 8.51953 15.7993 8.51953C15.936 8.51953 16.0499 8.57161 16.1411 8.67578L16.8637 9.3789C16.9549 9.47005 17.0005 9.58724 17.0005 9.73047C17.0005 9.87369 16.9549 9.99088 16.8637 10.082L11.102 15.8242C11.0109 15.9284 10.8937 15.9805 10.7505 15.9805C10.6073 15.9805 10.4901 15.9284 10.3989 15.8242Z" fill="#36B37E" />
                            </g>
                        </svg>
                        <p className="text-xs text-dark-light italic" >Verified writer</p>
                    </div>
                </div>
            </div>
            <h5 className="text-sm font-bold text-dark-light italic">
                {date}
            </h5>
        </div>
    );
}

export default ArticleCard;
