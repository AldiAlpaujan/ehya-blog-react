/* eslint-disable react-hooks/exhaustive-deps */
import images from "../../../constants/images";
import BurgerMenu from "../../Elements/BurgerMenu";
import { useContext, useEffect, useState } from "react";
import NavigationItems from "./NavItems";
import MobileNavigation from "./MobileNavigation";
import { NavBarContext } from "../../../context/NavBarContext";

const NavBar = () => {
    const [navHeight, setNavHeight] = useState<string | null>(null);
    const { showMenu } = useContext(NavBarContext)!;

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
        <nav className={`w-full ${navHeight} fixed flex flex-col bg-transparent `}>
            <div className="container bg-white flex justify-between items-center w-full py-5 px-6
                xl:px-40 lg:py-6">
                <img src={images.logo} alt="nav-img" />
                <NavigationItems className="hidden lg:flex" />
                <BurgerMenu className='lg:hidden' />
            </div>
            <MobileNavigation showMenu={showMenu} />
        </nav>
    );
}

export default NavBar;