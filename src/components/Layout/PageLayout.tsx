import { childrenType } from "../../utils/type";
import Footer from "../Fragments/Footer";
import NavBar from "../Fragments/NavBar";

const PageLayout = (props: { children?: childrenType, className?: string, withFooter?: boolean }) => {
    const withFooter = props.withFooter ?? true;
    return (
        <div className="h-screen" >
            <NavBar />
            <div className={`pt-16 lg:pt-[90px] ${props.className}`}>
                {props.children}
                {withFooter && <Footer />}
            </div>
        </div>
    );
}

export default PageLayout;