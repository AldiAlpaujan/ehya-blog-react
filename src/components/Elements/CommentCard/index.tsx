import { ArticleComment } from "../../../model/article";
import { formatDateTime } from "../../../utils/utils";
import iconReply from "../../../assets/icon/icon-reply.svg";
import iconPencil from "../../../assets/icon/icon-pencil.svg";
import iconTrash from "../../../assets/icon/icon-trash.svg";
import { user } from "../../../utils/global-var";

const CommentCard = (props: { comment: ArticleComment, className?: string }) => {
    const { comment } = props;
    return (
        <div className={`w-full p-3 mb-[18px] bg-[#F2F4F5] rounded-lg md:mb-5 ${props.className}`}>
            <div className="flex">
                <div className="flex-none w-10 h-10 mr-3 rounded-full overflow-auto">
                    <img
                        src={comment.user.image}
                        alt="user image" />
                </div>
                <div className="flex-grow text-sm lg:text-sm">
                    <div className="mb-4">
                        <div className="mb-3">
                            <h5 className="mb-[6px] font-bold lg:mb-1">
                                {comment.user.name}
                            </h5>
                            <p className="text-[#77808B] text-sm">
                                {formatDateTime(comment.date)}
                            </p>
                        </div>
                        <p className="text-[#77808B] ">
                            {comment.comment}
                        </p>
                    </div>
                    <div className="flex gap-x-5">
                        <Action icon={iconReply} label="Reply" />
                        {user.name === comment.user.name && <>
                            <Action icon={iconPencil} label="Edit" />
                            <Action icon={iconTrash} label="Delete" />
                        </>}
                    </div>
                    <div className={`${comment.reply?.length !== 0 && 'mt-6'}`}>
                        {
                            comment.reply?.map((value, i) => (
                                <CommentCard key={i} comment={value} className="p-0" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const Action = (props: { icon: string, label: string }) => {
    return (
        <div className="flex">
            <img src={props.icon} alt="icon" height={18} width={18} />
            <p className="ml-1 text-sm text-[#77808B]">{props.label}</p>
        </div>
    );
}

export default CommentCard;