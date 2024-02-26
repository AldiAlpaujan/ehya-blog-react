import { childrenType } from "../../../utils/type";

interface ButtonProps {
    children?: childrenType
    onClick?: () => void,
}

const OutlineButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className="py-2 px-8 border-2 border-primary rounded-full
            text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
            {props.children}
        </button>
    );
}

export default OutlineButton;