import { NavItems } from "../../../constants/nav-items";
import Button from "../../Elements/Button";
import NavItem from "./NavItem";

const NavigationItems = (props: { className?: string }) => {
    return (
        <div className={`${props.className}`}>
            <ul className="lg:flex items-center">
                {
                    NavItems.map((value, i) => (
                        <NavItem key={i} item={value} />
                    ))
                }
                <Button>
                    Sign in
                </Button>
            </ul>
        </div>
    );
}

export default NavigationItems;