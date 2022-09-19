import {Request, Response} from "express"
import { UserDataBase } from "../data/UserDataBase"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"

export async function signup (req: Request, res: Response){
    try {
        const {name, email, password} = req.body

        if(password.lenght < 6){
            throw new Error("Senha deve ter mais de 6 caracteres.")
        }

        if(!name || !email || !password){
            throw new Error("Preencha todos os campos para continuar.")
        }
        
        const userDataBase = new UserDataBase()
        
        const user = await userDataBase.findUserByEmail(email)

        if(user){
            throw new Error ("Email já cadastrado.")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({message: "Usuário criado com sucesso.", token})

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}