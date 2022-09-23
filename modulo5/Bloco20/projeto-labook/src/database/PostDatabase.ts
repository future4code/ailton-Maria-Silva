import { Post, IPostDB } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"
    private postModel = (post: Post):IPostDB =>{
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }
        return postDB
    }
    public createPost = async(post: Post) =>{
        const postDB = this.postModel(post)
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }
    public getAllPosts = async() =>{
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select("*")

        return result
    }
}