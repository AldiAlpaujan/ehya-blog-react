
import { childrenType } from "../../../utils/type";

interface ButtonProps {
    className?: string,
    children?: childrenType
    onClick?: () => void,
}
const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={`${props.className} w-full bg-primary 
            text-lg font-semibold text-white py-[12px] rounded-md
            transition-all duration-300
            hover:opacity-85 active:opacity-100`}>
            {props.children}
        </button>
    );
}

export default Button;