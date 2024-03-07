/* eslint-disable react-hooks/exhaustive-deps */
import images from "../../../constants/images";
import BurgerMenu from "../../Elements/BurgerMenu";
import { useContext, useEffect, useRef, useState } from "react";
import NavigationItems from "./NavItems";
import MobileNavigation from "./MobileNavigation";
import { NavBarContext } from "../../../context/NavBarContext";
import '../../Fragments/NavBar/nav.css';

const NavBar = () => {
    const [navHeight, setNavHeight] = useState<string | null>(null);
    const { showMenu } = useContext(NavBarContext)!;
    const navRef = useRef(null);

    window.onscroll = () => {
        const navBar = navRef.current! as HTMLElement;
        const offsetTop = navBar.offsetTop;
        if (window.scrollY > offsetTop) {
            navBar.classList.add("navbar-fixed");
        } else {
            navBar.classList.remove("navbar-fixed");
        }
    }

    useEffect(() => {
        if (showMenu) {
            setNavHeight('h-screen');
        } else {
            setTimeout(() => {
                setNavHeight(null);
            }, 800);
        }
    }, [showMenu]);

    return (
        <nav ref={navRef} className={`w-full ${navHeight} fixed flex flex-col`}>
            <div className={`container flex justify-between items-center w-full py-5 px-6
                xl:px-40 lg:py-6 ${showMenu && 'bg-white'}`}>
                <img src={images.logo} alt="nav-img" className="w-[78px] lg:w-[90px]" />
                <NavigationItems className="hidden lg:flex" />
                <BurgerMenu className='lg:hidden' />
            </div>
            <MobileNavigation showMenu={showMenu} />
        </nav>
    );
}

export default NavBar;