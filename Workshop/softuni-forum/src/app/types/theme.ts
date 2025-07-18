import { Post } from "./post";
import { User } from "./User";

export interface Theme {
    subscribers: string[],
    posts: Post[],
    _id: string,
    themeName: string,
    userId: User,
    created_at: string,
    updatedAt: string,
    _v: number,
}