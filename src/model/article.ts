export interface AuthorArticle {
    image: string,
    name: string,
    isVerify: boolean,
}

export interface Article {
    id: number,
    image: string,
    title: string,
    subtitle: string,
    date: string,
    author: AuthorArticle
}

