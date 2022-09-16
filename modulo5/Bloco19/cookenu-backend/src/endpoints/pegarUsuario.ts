import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator";

export async function getUser (req: Request, res: Response){
    try{
        const token = req.headers.authorization as string

        const authenticator = new Authenticator();

        if(!token){
            throw new Error ("Acesso negado.")
        }

        const tokenData = authenticator.getTokenData(token)

        if(!tokenData.id){
            throw new Error("Necessário passar id")
        }
        const userDataBase = new UserDataBase()
        
        const user = await userDataBase.findUserById(tokenData.id)
        
        res.status(200).send({message: user})

    }catch (error:any){
        res.status(500).send({message:error.message})
    }
}