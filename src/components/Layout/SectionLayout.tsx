import { childrenType } from "../../utils/type";

const SectionLayout = (props: { children?: childrenType, className?: string }) => {
    return (
        <section className={`container px-6 xl:px-40 ${props.className}`}>
            {props.children}
        </section>
    );
}

export default SectionLayout;