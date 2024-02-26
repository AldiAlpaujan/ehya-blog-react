import { useNavigate } from "react-router-dom";
import { NavItems } from "../../../constants/nav-items";
import OutlineButton from "../../Elements/OutlineButton";
import NavItem from "./NavItem";
import { useContext } from "react";
import { NavBarContext } from "../../../context/NavBarContext";

const NavigationItems = (props: { className?: string }) => {
    const navigate = useNavigate();
    const { setShowMenu } = useContext(NavBarContext)!;

    const handleSignIn = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(false);
            setTimeout(() => {
                navigate('/login')
            }, 700);
        } else {
            navigate('/login')
        }
    }

    return (
        <div className={`${props.className}`}>
            <ul className="lg:flex items-center">
                {
                    NavItems.map((value, i) => (
                        <NavItem key={i} item={value} />
                    ))
                }
                <OutlineButton onClick={handleSignIn}>
                    Sign in
                </OutlineButton>
            </ul>
        </div>
    );
}

export default NavigationItems;