import { Request, Response } from "express";
import { User } from "../types/userType";

export async function createUser(req: Request, res: Response){
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.statusCode = 404
            throw new Error("Por favor, preencha todos os campos para prosseguir.")
        }
        
    } catch(error:any){

    }
}