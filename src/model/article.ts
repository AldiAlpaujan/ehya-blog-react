import { User } from "./user";

export interface Article {
    id: number,
    image: string,
    title: string,
    subtitle: string,
    category: string,
    date: string,
    author: User
    content: string,
    comments?: ArticleComment[],
}

export interface ArticleComment{
    id: number,
    user: User,
    date: Date,
    comment: string,
    reply?: ArticleComment[],
}

