import { childrenType } from "../../utils/type";
import NavBar from "../Fragments/NavBar";

const PageLayout = (props: { children?: childrenType, className?: string }) => {
    return (
        <div className="h-screen" >
            <NavBar />
            <div className={`pt-16 lg:pt-[90px] ${props.className}`}>
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout;