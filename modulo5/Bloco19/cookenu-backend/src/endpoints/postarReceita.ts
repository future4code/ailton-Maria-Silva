import {Request, Response} from "express"
import { RecipeDataBase } from "../data/RecipeDataBase"
import { Recipe } from "../model/Recipe"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/idGenerator"

export async function postarReceita (req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const {title, description} = req.body
        
        if (!title || !description){
            throw new Error("Preencha todos os campos para continuar.")
        }
        if (!token){
            throw new Error("Precisa estar logado para postar.")
        }
        const userId = String(new Authenticator().getTokenData(token))
        const idGenerator = new IdGenerator();
        const recipeId = idGenerator.generate();
        const recipeDate = String(new Date());
        const recipe = new Recipe(recipeId, title, description, recipeDate, userId)
        const recipeDataBase = new RecipeDataBase()
        const response = await recipeDataBase
        res.status(200).send({message: "Receita criada com sucesso.", token})
        
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}