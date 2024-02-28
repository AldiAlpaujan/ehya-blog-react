import { childrenType } from "../../utils/type";
import PageLayout from "./PageLayout";

interface AuthLayoutProps {
    title: string,
    children: childrenType,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
}

const AuthLayout = (props: AuthLayoutProps) => {
    return (
        <PageLayout className="h-full">
            <div className="container h-full sm:flex sm:justify-center">
                <form onSubmit={props.onSubmit} className="flex flex-col justify-center items-center h-[90%] w-full
                    sm:max-w-sm lg:h-[100%]" >
                    <h1 className="text-2xl font-roboto font-bold text-dark-soft mb-7
                    md:text-3xl lg:text-4xl" >
                        {props.title}
                    </h1>
                    {props.children}
                </form>
            </div>
        </PageLayout>
    );
}

export default AuthLayout;