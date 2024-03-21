import images from "../constants/images";
import { Article, ArticleComment } from "../model/article";
import { user } from "../utils/global-var";
import { authors } from "./author-dummy-data";

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.`;

const articleCommets: ArticleComment[] = [
    {
        id: 1,
        date: new Date('2020-12-15T11:40:00'),
        user: user,
        comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.`,
        reply: [
            {
                id: 1,
                date: new Date('2020-12-15T11:40:00'),
                user: authors[1],
                comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris`,
                reply: [],
            },
        ],
    },
    {
        id: 2,
        date: new Date('2020-12-15T11:40:00'),
        user: authors[3],
        comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae`,
        reply: [],
    },
    {
        id: 3,
        date: new Date('2020-12-15T11:40:00'),
        user: authors[4],
        comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        reply: [],
    },
];

export const articlessData: Article[] = [
    {
        id: 1,
        image: images.art1,
        title: "Future of Work",
        subtitle: "Majority of peole will work in jobs that don't exist today.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[0],
        comments: articleCommets,
    },
    {
        id: 2,
        image: images.art2,
        title: "Why Use External It Support",
        subtitle: "Thanks to never-ending piles of data & the amount of insight.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[1],
        comments: articleCommets,
    },
    {
        id: 3,
        image: images.art3,
        title: "Future of Learning",
        subtitle: "A constant ability to learn will be on the most crucial skills.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[2],
        comments: articleCommets,
    },
    {
        id: 4,
        image: images.art4,
        title: "Help Finding Information Online",
        subtitle: "Majority of peole will work in jobs that don't exist today.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[3],
        comments: articleCommets,
    },
    {
        id: 5,
        image: images.art5,
        title: "How Does An Lcd Screen Work",
        subtitle: "Thanks to never-ending piles of data & the amount of insight.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[4],
        comments: articleCommets,
    },
    {
        id: 6,
        image: images.art6,
        title: "Headset No Longer Wired For Sound",
        subtitle: "A constant ability to learn will be on the most crucial skills.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[0],
        comments: articleCommets,
    },
    {
        id: 7,
        image: images.art7,
        title: "Choosing The Best Photo Printer",
        subtitle: "Majority of peole will work in jobs that don't exist today.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[1],
        comments: articleCommets,
    },
    {
        id: 8,
        image: images.art8,
        title: "A Discount Toner",
        subtitle: "Thanks to never-ending piles of data & the amount of insight.",
        category: 'Education',
        content: content,
        date: "02 May",
        author: authors[2],
        comments: articleCommets,
    },
    // {
    //     image: images.art9,
    //     title: "Addiction When Gambling Become Hero",
    //     subtitle: "A constant ability to learn will be on the most crucial skills.",
    //     date: "02 May",
    //     author: {
    //         image: "https://s3-alpha-sig.figma.com/img/d580/602d/045363cdb40a695028125ea22db55e13?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDcQvgTzTDmBW2MMWWgvMAKtvu3iTc800Ce7Bk3DB294a-wHbp77TaXB3kAdQaL~C2QA0y-1rhIS6JoWN6YeTDNEnFwBWgDoNdD-e8sWDbqb6w0lGIVFU9wYPx3YE48b0OH7ZbOWcX7uULGQ4sWXB0vueUMgz3S3vimpT~LbTx7k9bUXOql7uit97dMcmzkb7dFJSUykudW-eDRKWxwjprwqDTuWTl9AcX3rBIpn5M2V3jSrkJybGbbL-EnTWFj7USDLreleWAHKilOFU27FoqQc2OnEvFiOWXDFXIJDhbJDH7c8ms2-8ugsdocrIGXCM5qith84DLmxq0i2Hxw3NQ__",
    //         name: "Helen Hughes",
    //         isVerify: true
    //     }
    // },
];

