import { useEffect, useState } from "react";
import NavigationItems from "./NavItems";

const MobileNavigation = (props: { showMenu: boolean }) => {
    const { showMenu } = props;
    const [showNavItem, setShowNavItems] = useState(false);
    const [ovacity, setOvacity] = useState('opacity-0');

    useEffect(() => {
        if (showMenu) {
            setShowNavItems(true);
            setTimeout(() => {
                setOvacity('opacity-100');
            }, 500);
        } else {
            setOvacity('opacity-0');
            setTimeout(() => {
                setShowNavItems(false);
            }, 300);
        }
    }, [showMenu]);

    return (
        <div className={`h-full bg-dark-hard transition-all duration-500 ease-in-out ${showNavItem ? "w-full" : "w-0"} self-end lg:hidden`}>
            <NavigationItems
                className={`${showNavItem ? 'flex flex-col' : 'hidden'} ${ovacity} 
                transition-all duration-500 h-full my-auto justify-center items-center`}
            />
        </div>
    );
}

export default MobileNavigation;