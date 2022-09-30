import { Post, IPostDB, GetPostsOutputDTO } from "../models/Post"
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
    public postModelLike = (post: Post)=>{
        const postLikeDB: GetPostsOutputDTO = {
            id: post.getId(),
            content: post.getContent(),
            userId: post.getUserId(),
            likes: post.getLikes()
        }
        return postLikeDB
    }
    public createPost = async(post: Post) =>{
        const postDB = this.postModel(post)
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }
    public getAllPosts = async() =>{
        const result: IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select("*")

        return result
    }
    public getLikes = async(postId: string) =>{
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select()
        .count("id AS likes")
        .where({post_id:postId})

        return result[0].likes as number
    }
    public findPostById = async (id: string) =>{
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        .where({id})

        return result[0]
    }
    public deletePost = async (id:string) =>{
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({id: id})
    }
}