import SectionLayout from "../../Layout/SectionLayout";
import whiteLogo from "../../../assets/white-logo.svg";
import Heart from "../../../assets/Heart.svg";

interface FooterMenu {
    title: string,
    menu: string[],
}

const productMenu: string[] = [
    'Landing Page',
    'Features',
    'Documentation',
    'Refferal Program',
    'Pricing',
];

const servicesMenu: string[] = [
    'Documentation',
    'Design',
    'Themes',
    'Ilustration',
    'UI KIT',
];

const companyMenu: string[] = [
    'About',
    'Terms',
    'Privacy Policy',
    'Careers',
];

const moreMenu: string[] = [
    'Documentation',
    'lisence',
    'Changelog',
];

const Footer = () => {
    const menu: FooterMenu[] = [
        {
            title: 'Product',
            menu: productMenu,
        },
        {
            title: 'Services',
            menu: servicesMenu,
        },
        {
            title: 'Company',
            menu: companyMenu,
        },
        {
            title: 'More',
            menu: moreMenu,
        },
    ];


    return (
        <div className=" w-full h-full bg-dark-hard">
            <SectionLayout className="text-white pt-6 pb-10 lg:pt-16">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 order-last md:order-first md:col-span-3">
                        <div className=" flex flex-col justify-center items-center text-center md:text-start md:items-start">
                            <img className="mb-4" src={whiteLogo} alt="" />
                            <p className="text-sm text-dark-light mb-5 md:text-base">
                                Build a modern and creative website with crealand
                            </p>
                            <div className="flex gap-4">
                                {
                                    Array(5).fill(1).map((_v, i) => (
                                        <div key={i} className="w-[30px] h-[30px] bg-[#FC5A5A] rounded-full">
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1" />
                    <div className="col-span-12 grid grid-cols-12 mb-3 md:col-span-7">
                        {
                            menu.map((v, i) => (
                                <div key={i} className={`mb-6 col-span-6 ${(i % 2 == 0) ? 'md:col-span-7' : 'md:col-span-5'} lg:col-span-3 3xl:col-span-4`}>
                                    <h5 className="mb-4 text-base text-dark-light font-bold md:text-lg">
                                        {v.title}
                                    </h5>
                                    <ul>
                                        {v.menu.map((value, i) => (
                                            <li key={i} className="mb-3 text-sm text-[#959EAD] md:text-base transition-all duration-300 hover:cursor-pointer hover:ml-2">
                                                {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-14 hidden md:flex flex-col items-center justify-center">
                    <img className="mb-6" src={Heart} alt="" />
                    <h3 className="text-base text-dark-light font-bold italic">
                        Copyright © 2023. Crafted with love.
                    </h3>
                </div>
            </SectionLayout>
        </div>
    );
}

export default Footer;