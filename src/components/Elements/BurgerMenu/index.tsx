import '../../Fragments/NavBar/nav.css';
import { useRef, useState } from 'react';

interface BurgerMenuProps {
    className: string,
    onChanged: (value: boolean) => void
}

const BurgerMenu = (props: BurgerMenuProps) => {
    const [isActive, setIsActive] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOnClick = () => {
        setIsActive(!isActive);
        props.onChanged(isActive);
        const value = buttonRef.current!;
        if (isActive) {
            value.classList.add('burger-menu-active');
            setTimeout(() => {
                value.classList.add('rotate-burger-line');
            }, 400)
        } else {
            value.classList.remove('rotate-burger-line');
            setTimeout(() => {
                value.classList.remove('burger-menu-active');
            }, 400)
        }
    }

    return (
        <button ref={buttonRef} onClick={handleOnClick} className={`${props.className} w-[24px] h-[23px] relative`} >
            <span className="burger-line top-0 transition-all duration-500" />
            <span className="burger-line static transition-all duration-500" />
            <span className="burger-line bottom-0 transition-all duration-500" />
        </button>
    );
}

export default BurgerMenu;