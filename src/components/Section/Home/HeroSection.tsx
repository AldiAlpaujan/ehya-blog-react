import Button from "../../Elements/Button";
import images from "../../../constants/images";
import SectionLayout from "../../Layout/SectionLayout";

const HeroSection = () => {
    return (
        <SectionLayout className="pt-10 lg:flex">
            <div className="flex flex-col items-center lg:w-1/2 lg:mt-8 lg:items-start">
                <div className="md:max-w-[555px] lg:max-w-max">
                    <h1 className="mb-4 font-roboto text-3xl text-dark-soft font-bold text-center
                    md:text-5xl md:leading-tight md:mb-5 lg:text-start lg:text-4xl
                    2xl:text-[52px] 2xl:leading-[60px]">
                        Read the most interesting articles
                    </h1>
                    <p className="text-center text-base text-dark-light leading-7 mb-[60px] md:text-xl md:mb-7 lg:text-start lg:text-lg 2xl:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                <SearchInput />
                <Tags />
            </div>

            <div className="hidden lg:ml-10 lg:block lg:w-1/2">
                <img
                    className="w-full h-full object-cover"
                    src={images.heroImage}
                    alt="hero Image" />
            </div>
        </SectionLayout>
    );
};

const SearchInput = () => {
    return (
        <div className="w-full mb-4 md:mb-6">
            <div className="mb-4 flex items-center justify-center rounded-md overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:rounded-lg">
                <label htmlFor="search" className="ml-4">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.7781 14.8968L14.8937 15.7812C14.6031 16.075 14.1281 16.075 13.8343 15.7812L10.7187 12.6656C10.5781 12.525 10.5 12.3344 10.5 12.1343V11.625C9.39686 12.4875 8.00935 13 6.49998 13C2.90936 13 0 10.0906 0 6.49998C0 2.90936 2.90936 0 6.49998 0C10.0906 0 13 2.90936 13 6.49998C13 8.00935 12.4875 9.39686 11.625 10.5H12.1343C12.3344 10.5 12.525 10.5781 12.6656 10.7187L15.7812 13.8343C16.0718 14.1281 16.0718 14.6031 15.7781 14.8968ZM2.49999 6.49998C2.49999 8.71247 4.29061 10.5 6.49998 10.5C8.71247 10.5 10.5 8.70936 10.5 6.49998C10.5 4.2875 8.70936 2.49999 6.49998 2.49999C4.2875 2.49999 2.49999 4.29061 2.49999 6.49998Z"
                            fill="#959EAD"
                        />
                    </svg>
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search article"
                    className="w-full ml-3 py-3 h-full text-dark-hard font-medium outline-none placeholder:text-[#959EAD] placeholder:font-bold"
                />
                <Button className="hidden my-2 mr-2 py-[8px] text-base rounded-xl md:block">
                    Search
                </Button>
            </div>
            <Button className="md:hidden w-full">Search</Button>
        </div>
    );
};

const Tags = () => {
    const tags: string[] = [
        'Design', 'User Experience', 'User Interfaces',
    ];
    return (
        <div className="self-start flex flex-wrap items-center gap-y-3 gap-x-3">
            <h5 className="text-base font-bold italic text-dark-light">
                Popular Tag :
            </h5>
            {
                tags.map((value, index) => (<Tag key={index} title={value} />))
            }
        </div>
    );
}

const Tag = (props: { title: string }) => {
    return (
        <div className="bg-blue-100 rounded-md">
            <p className="text-primary text-sm font-bold italic py-[6px] px-[18px]">
                {props.title}
            </p>
        </div>
    );
}

export default HeroSection;