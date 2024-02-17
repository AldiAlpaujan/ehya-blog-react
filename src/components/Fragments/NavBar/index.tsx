import images from "../../../constants/images";
import BurgerMenu from "./BurgerMenu";
import { NavItems } from "../../../constants/nav-items";
import NavItem from "./NavItem";
import Button from "../../Elements/Button";

const NavBar = () => {
    return (
        <nav>
            <div className="container flex justify-between itemce w-full py-5 px-6
                xl:px-40 lg:py-6">
                <img src={images.logo} alt="nav-img" />
                <div className="hidden lg:flex ">
                    <ul className="flex items-center ">
                        {
                            NavItems.map((value, i) => (
                                <NavItem key={i} item={value} />
                            ))
                        }
                    </ul>
                    <Button>
                        Sign in
                    </Button>
                </div>
                <BurgerMenu className='lg:hidden' />
            </div>
        </nav>
    );
}



export default NavBar;