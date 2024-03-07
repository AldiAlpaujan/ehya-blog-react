export interface AuthorArticle {
    image: string,
    name: string,
    isVerify: boolean,
}

export interface Article {
    image: string,
    title: string,
    subtitle: string,
    date: string,
    author: AuthorArticle
}

