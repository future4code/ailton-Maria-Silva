import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase"

export async function followUser (req: Request, res: Response){
    try{
        const { id } = req.body

        const token = req.headers.authorization as string

        if(!token){
            throw new Error ("Acesso negado.")
        }

        const userDataBase = new UserDataBase()
        
        const user = await userDataBase.findUserById(id)

        res.status(200).send({
            id: user?.getId(),
            email: user?.getEmail(),
            name: user?.getName()
        })

    }catch (error:any){
        res.status(500).send({message:error.message})
    }
}