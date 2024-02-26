import { HTMLInputTypeAttribute } from "react";

interface AuthInputProps {
    name: string,
    type: HTMLInputTypeAttribute,
    label: string,
    placeholder: string,
}

const AuthInput = (props: AuthInputProps) => {
    const { name, type, label, placeholder } = props;

    return (
        <div className="w-full flex flex-col">
            <label htmlFor={name} className="text-dark-light text-sm md:text-base font-semibold mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className={`w-full py-3 px-4 mb-5 text-sm font-semibold focus:outline-none
                    placeholder:text-[#959ead] rounded-md border border-[#C3CAD9]
                    md:text-base
                    md:py-4 md:px-5 md:mb-6`} />
        </div>
    );
}

export default AuthInput;