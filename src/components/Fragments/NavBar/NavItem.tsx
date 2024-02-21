import { Link } from "react-router-dom";
import { NavItem as INavItem } from "../../../constants/nav-items";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NavItem = (props: { item: INavItem }) => {
    const [showDropDown, setDropDown] = useState(false);

    const { name, type, items, href } = props.item;
    const isLink = type === 'link';

    const isLgDisplay = (): boolean => {
        const width = window.innerWidth;
        return width >= 1024;
    }

    return (
        <li>
            <div
                onMouseOver={() => { if (isLgDisplay()) setDropDown(true) }}
                onMouseOut={() => { if (isLgDisplay()) setDropDown(false) }}
                className="relative flex flex-col items-center
                    pl-2 pr-1 mr-0 lg:mr-9
                    group">
                <Link
                    onClick={() => { if (window.innerWidth < 1024) setDropDown(!showDropDown) }}
                    to={href ?? ''} className={`font-semibold text-white text-sm
                        ${showDropDown ? 'mb-4' : 'mb-6'}
                        lg:text-base lg:mb-0 lg:text-dark-soft lg:z-10`} >
                    {name}
                    {!isLink && (<FontAwesomeIcon icon={faChevronDown} className="ml-2 mb-[2px] my-auto h-[10px] w-[10px]" />)}
                </Link>
                <span className={`absolute hidden right-0 opacity-0 text-blue-500 font-bold 
                    transition-all duration-300
                    ${isLink && "group-hover:right-full group-hover:opacity-100"} lg:block`}>
                    /
                </span>
                {!isLink && <DropDown items={items!} isActive={showDropDown} />}
            </div>
        </li>
    );
}

const DropDown = (props: { items: { name: string, href: string }[], isActive: boolean }) => {
    const items = props.items;
    const isActive = props.isActive;
    const [display, setDisplay] = useState('hidden');
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        if (isActive) {
            setDisplay('block');
            setTimeout(() => {
                setShowItems(true);
            }, 100);
        } else {
            setShowItems(false);
            setTimeout(() => {
                setDisplay('hidden');
            }, 300);

        }
    }, [isActive]);

    return (
        <div className={`${display} w-28 z-[9] mb-3 lg:mb-0 lg:absolute lg:w-32 lg:pt-10 hover:block`}>
            <div className={`${showItems ? 'opacity-100' : 'opacity-0'} bg-dark-soft transition-all duration-300 ease-in-out rounded-lg lg:bg-white lg:shadow-md`}>
                {
                    items.map((value, i) => (
                        <button key={i} className={`w-full py-2 px-4 text-center text-white
                        ${i === 0 && 'rounded-t-lg'} ${i === (items.length - 1) && 'rounded-b-lg'}
                        text-sm font-semibold transition-all duration-300
                        lg:text-base lg:text-dark-soft
                        lg:hover:bg-dark-hard lg:hover:text-white`} >
                            {value.name}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}


export default NavItem;