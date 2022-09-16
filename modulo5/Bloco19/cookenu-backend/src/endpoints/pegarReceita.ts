import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getRecipeFromUser (req: Request, res: Response){
    try{
        const token = req.headers.authorization as string
        const id = req.params.id
        const authenticator = new Authenticator();
        if(!token){
            throw new Error ("Acesso negado.")
        }
        const tokenData = authenticator.getTokenData(token)
        if(!tokenData.id){
            throw new Error("Necessário passar id")
        }
        const recipeDataBase = new RecipeDataBase()
        const recipeById = await recipeDataBase.findRecipeById
        res.status(200).send(recipeById)
    }catch (error:any){
        res.status(500).send({message:error.message})
    }
}