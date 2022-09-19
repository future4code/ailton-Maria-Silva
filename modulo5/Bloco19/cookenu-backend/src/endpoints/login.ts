import {Request, Response} from "express"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"

export async function login (req: Request, res: Response){
    try {
        const {email, password} = req.body

        if(!email || !password){
            throw new Error("Preencha todos os campos para continuar.")
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if(!user){
            throw new Error ("E-mail não está cadastrado.")
        }
        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())
        if(!passwordIsCorrect){
            throw new Error ("E-mail ou senha incorreto.")
        }
        
        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({message: "Usuário logado com sucesso.", token})
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}