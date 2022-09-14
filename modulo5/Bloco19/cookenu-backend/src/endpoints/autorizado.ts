import { Request, Response} from "express"
import { UserDataBase } from "../data/UserDataBase"
import { Authenticator } from "../services/Authenticator"

export async function getAll(req: Request, res: Response){
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error ("Acesso negado para esse tipo de usuário")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        if(tokenData.role !== "ADMIN"){
            throw new Error ("Somente admin podem acessar essa funcionalidade")
        }
        const userDataBase = new UserDataBase();
        const users = await userDataBase.getAllUsers();
        res.status(200).send(users)

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}