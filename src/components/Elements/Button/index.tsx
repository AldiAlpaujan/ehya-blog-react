interface ButtonProps {
    children?: string | JSX.Element | JSX.Element[],
}

const Button = (props: ButtonProps) => {
    return (
        <button className="py-2 px-8 border-2 border-blue-500 rounded-full
            text-base font-semibold text-blue-500 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            {props.children}
        </button>
    );
}

export default Button;