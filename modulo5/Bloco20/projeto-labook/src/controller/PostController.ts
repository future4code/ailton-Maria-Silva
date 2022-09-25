import {Request, Response} from "express"
import { PostBusiness } from "../business/PostBusiness";
import { GetPostInputDTO, CreatePostInputDTO, IDeletePostDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
    public createPost = async (req: Request, res: Response) =>{
        try {
            const token = req.headers.authorization as string
            const content = req.body.content

            const input: CreatePostInputDTO = {
                token,
                content
            }
            const response = await this.postBusiness.createPost(input)
            
            res.status(201).send(response)

        } catch (error:any){
            res.status(400).send({ message: error.message })
        }
    }
    public allPosts = async(req: Request, res: Response) =>{
        try {
            const input: GetPostInputDTO = {
                token: req.headers.authorization
            }
            const response = await this.postBusiness.getPosts(input)
            
            res.status(201).send(response)

        } catch(error:any){
            res.status(400).send({ message: error.message })
        }
    }
    public deletePost = async(req: Request, res: Response) =>{
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            
            const input: IDeletePostDTO = {
                token,
                idPost: id
            }
            const response = await this.postBusiness.deletePostB(token)
            res.status(201).send(response)

        } catch(error:any){
            res.status(400).send({ message: error.message })
        }
    }

}