import { Link } from "react-router-dom";
import { NavItem as INavItem } from "../../../constants/nav-items";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavItem = (props: { item: INavItem }) => {
    const { name, type, href } = props.item;
    const isLink = type === 'link';

    return (
        <li>
            <div
                className="relative pl-2 pr-1 mr-9 group">
                <Link to={href ?? ''} className="text-dark-soft font-semibold" >
                    {name}
                    {!isLink && (<FontAwesomeIcon icon={faChevronDown} className="ml-2" size={"xs"} />)}
                </Link>
                <span className={`absolute right-0 opacity-0 text-blue-500 font-bold 
                    transition-all duration-300
                    ${isLink && "group-hover:right-full group-hover:opacity-100"}`}>
                    /
                </span>
                {
                    !isLink &&
                    <div className={`absolute mt-2 bg-blue-500 hidden group-hover:block`}>
                        Hello World asdadsasda
                    </div>
                }
            </div>
        </li>
    );
}


export default NavItem;