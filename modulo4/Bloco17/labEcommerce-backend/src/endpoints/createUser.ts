import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { AddUser, User } from "../types/userType";

export async function createUser(req: Request, res: Response){
    try {
        const {name, email, password}: User = req.body

        if(!name || !email || !password){
            res.statusCode = 404
            throw new Error("Por favor, preencha todos os campos para prosseguir.")
        }

        const addUser: AddUser = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
        
        const createdUser = await insertUser(addUser)

        res.status(201).send({message: createdUser})

    } catch(error:any){
        res.status(500).send({message: error.message})
    }
}
