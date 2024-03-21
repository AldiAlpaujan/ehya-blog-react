import Button from "../../../components/Elements/Button";
import CTAImage from '../../../assets/CtaImage.jpg';

const CTASection = () => {
    return (
        <div >
            <svg
                className="w-full h-auto max-h-40 translate-y-[1px]"
                preserveAspectRatio="none"
                viewBox="0 0 2160 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Wave"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
                    fill="#0D2436"
                />
            </svg>
            <div className="w-full pb-10 bg-dark-hard my-0 flex justify-center">
                <div className=" grid grid-cols-12 my-0 mx-5  text-white md:content-start md:px-16 lg:mx-10 lg:px-0 2xl:max-w-[1536px]">
                    <div className="col-span-12 md:mb-[26px] lg:col-span-6 lg:pr-10 xl:ml-16 2xl:ml-32">
                        <h4 className="font-roboto text-2xl font-bold pt-14 mb-10 md:text-center sm:text-3xl md:text-4xl md:mb-12 lg:text-start
                        lg:text-3xl xl:text-4xl">
                            Get our stories delivered From us to your inbox weekly.
                        </h4>
                        <div className="w-full flex flex-wrap mb-6 justify-center lg:justify-start">
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="py-3 px-4 mb-3 rounded-md w-full outline-none bg-white text-black font-semibold
                            placeholder:text-dark-light sm:mb-0 sm:mr-4 sm:py-4 sm:w-[calc(75%-16px)] md:w-[48%] lg:w-[63%]" />
                            <Button className="w-full py-[13px] text-base sm:w-1/4 lg:w-1/3">
                                Get started
                            </Button>
                        </div>
                        <p className="text-dark-light text-sm md:text-center md:text-base lg:text-start" >
                            <span className="text-[#B3BAC5] font-bold italic md:text-dark-light md:font-normal md:not-italic">
                                Get a response tomorrow
                            </span> if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                    <div className="hidden col-span-12 md:flex md:justify-center md:order-first lg:order-last lg:col-span-6 ">
                        <div className="relative w-[578px] h-[427px] ">
                            <div className="absolute right-0 w-[237px] h-[200px] mt-8 bg-[#FC5A5A] rounded-xl" />
                            <div className="absolute bottom-0 w-[237px] h-[200px] mt-8 bg-white opacity-[.06] rounded-xl" />
                            <div className="absolute left-[9.5%] w-[466px] bg-white rounded-2xl overflow-hidden
                            lg:w-[80%] ">
                                <div className="px-2 pt-2 mb-7">
                                    <img className="w-full" src={CTAImage} alt="" />
                                </div>
                                <div className="text-black px-8 pb-8">
                                    <h5 className="mb-3 text-2xl text-dark-soft font-bold">
                                        The best articles every week
                                    </h5>
                                    <p className="text-dark-light text-lg">
                                        Our insurance plans offers are priced<br />the same everywhere else.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default CTASection;
