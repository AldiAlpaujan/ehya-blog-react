interface NavItemChildren {
    name: string,
    href: string,
}

export interface NavItem {
    name: string,
    type: 'link' | 'dropdown',
    items?: NavItemChildren[],
    href?: string,
}

export  const NavItems: NavItem[] = [
    {
        name: 'Home',
        type: 'link',
        href: '/'
    },
    {
        name: 'Articles',
        type: 'link',
        href: '/articles'
    },
    {
        name: 'Pages',
        type: 'dropdown',
        items: [
            {
                name: 'About Us',
                href: '/about',
            },
            {
                name: 'Contact Us',
                href: '/contact',
            },
        ]
    },
    {
        name: 'Pricing',
        type: 'link',
        href: '/'
    },
    {
        name: 'FAQ',
        type: 'link',
        href: '/'
    },
];
