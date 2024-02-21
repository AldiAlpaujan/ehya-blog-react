import { childrenType } from "../../utils/type";
import NavBar from "../Fragments/NavBar";

const PageLayout = (props: { children?: childrenType }) => {
    return (
        <div className="h-screen" >
            <NavBar />
            <div className="pt-[68px] lg:pt-[90px]">
                <div className="w-52 h-52 bg-blue-400">
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default PageLayout;