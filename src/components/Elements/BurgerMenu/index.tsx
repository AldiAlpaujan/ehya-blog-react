/* eslint-disable react-hooks/exhaustive-deps */
import { NavBarContext } from '../../../context/NavBarContext';
import '../../Fragments/NavBar/nav.css';
import { useContext, useEffect, useRef } from 'react';

interface BurgerMenuProps {
    className: string,
}

const BurgerMenu = (props: BurgerMenuProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { showMenu, setShowMenu } = useContext(NavBarContext)!;

    const handleOnClick = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const value = buttonRef.current!;
        if (showMenu) {
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
    }, [showMenu])

    useEffect(() => {
        if (showMenu) {
            const value = buttonRef.current!;
            value.classList.add('burger-menu-active');
            value.classList.add('rotate-burger-line');
        }
    }, [])

    return (
        <button ref={buttonRef} onClick={handleOnClick} className={`${props.className} w-[24px] h-[23px] relative`} >
            <span className="burger-line top-0 transition-all duration-500" />
            <span className="burger-line static transition-all duration-500" />
            <span className="burger-line bottom-0 transition-all duration-500" />
        </button>
    );
}

export default BurgerMenu;