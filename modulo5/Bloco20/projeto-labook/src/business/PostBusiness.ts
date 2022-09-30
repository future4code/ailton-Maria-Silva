import { likes } from "../database/migrations/data"
import { PostDatabase } from "../database/PostDatabase"
import { CreatePostInputDTO, GetPostsOutputDTO, IDeletePostDTO, Post, PostOutput } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
    public createPost = async(input: CreatePostInputDTO) =>{
        const {token, content} = input
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("Acesso negado")
        }
        if(content.length < 1 ){
            throw new Error("Post tem que ser maior que um caractere.")
        }
        const id = this.idGenerator.generate()
        const post = new Post(id, content, payload.id)

        await this.postDatabase.createPost(post)
        const response: PostOutput = {
            message: "Post criado com sucesso.",
            post
        }
        return response
    }
    public getPosts = async (token: string) =>{
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("Acesso negado")
        }
        const postDB = await this.postDatabase.getAllPosts()

        const posts = postDB.map((post)=>{
            return new Post(post.id, post.content, post.user_id)
        })
        for(let post of posts){
            const postId = post.getId()
            const amountOfLikes = await this.postDatabase.getLikes(postId)
            post.setLikes(amountOfLikes)
        }
        
        const responseType:GetPostsOutputDTO[] = posts.map((post)=>{
            return this.postDatabase.postModelLike(post)
        })
        return responseType
    }
    public deletePostB = async(input: IDeletePostDTO) =>{
        const {token, idPost} = input;
        
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("Acesso negado")
        }
        
        const postDB = await this.postDatabase.findPostById(idPost)
        if(!postDB){
            throw new Error ("Post não encontrado.")
        }
        if(payload.role === USER_ROLES.NORMAL && postDB.user_id !== payload.id){
            throw new Error("Não é possível deletar post de outro usuário.")
        }
        await this.postDatabase.deletePost(idPost)
        
        const response = {
            message: "Post deletado com sucesso!"
        }
    }

}