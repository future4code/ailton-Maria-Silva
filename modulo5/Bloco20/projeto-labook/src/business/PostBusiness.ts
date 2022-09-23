import { likes } from "../database/migrations/data"
import { PostDatabase } from "../database/PostDatabase"
import { CreatePostInputDTO, Post, PostOutput } from "../models/Post"
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
    }

}