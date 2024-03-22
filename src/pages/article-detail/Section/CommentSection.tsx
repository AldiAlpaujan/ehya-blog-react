import { useContext } from "react";
import Button from "../../../components/Elements/Button";
import { ArticleDetailContext } from "../../../context/ArticleDetailContext";
import CommentCard from "../../../components/Elements/CommentCard";

const CommentSection = (props: { className?: string }) => {
    return (
        <section className={`w-full pt-10 lg:pb-[100px] ${props.className}`}>
            <CommentForm />
            <CommentList />
        </section>
    );
}

const CommentForm = () => {
    return (
        <form action="" className="mb-[50px]">
            <label htmlFor="text-area">
                <div className="p-[18px] w-full border-2 border-[#76AEFF] rounded-lg">
                    <textarea
                        id="text-area"
                        rows={4}
                        placeholder="Leave your comment here..."
                        className="font-roboto w-full resize-none outline-none placeholder:text-sm placeholder:tracking-wide placeholder:text-[#77808B] md:placeholder:text-base" />
                    <div className="w-full flex justify-end">
                        <Button className="text-sm font-medium py-[6px] px-6 rounded-lg md:py-[9.5px] md:px-9">
                            Send
                        </Button>
                    </div>
                </div>
            </label>
        </form>
    );
}

const CommentList = () => {
    const { article } = useContext(ArticleDetailContext)!;

    return (
        <div>
            <h3 className="font-raleway mb-8 text-base font-bold">
                All Comments (<span className="font-roboto">{article?.comments?.length}</span>)
            </h3>
            {
                article?.comments!.map((value, i) => (
                    <CommentCard key={i} comment={value} />
                ))
            }
        </div>
    );
}

export default CommentSection;