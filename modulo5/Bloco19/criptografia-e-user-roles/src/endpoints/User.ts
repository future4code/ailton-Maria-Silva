import { compare } from "bcryptjs";
import {Request, Response} from "express"
import { generateToken } from "../services/generateToken";

export class UserEndpoint {
    static createUser(arg0: string, createUser: any) {
        throw new Error("Method not implemented.");
    }
    public async createUser (req: Request, res:Response) {
        try {
            const userData = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }
            const id = generate();
            
            const hashPassword = await hash(userData.password);

            await createUser(id, userData.email, userData.password, userData.role);

            const token = generateToken({
                id,
                role: userData.role
            });
            res.status(200).send({token})
            
        } catch (error:any) {
            res.status(500).send({message:error.message})
        }
    }

    async login (req: Request, res:Response) {
        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1){
                throw new Error ("E-mail inválido")
            }
            const userData = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await getUserByEmail(userData.email);

            const compareResult = await compare(
                userData.password,
                user.password
            );

            if(!compareResult){
                throw new Error ("Senha inválida")
            }

            const token = generateToken({ id: user.id})

            res.status(200).send({token})
        } catch (error:any) {
            
        }
    }

    async getUser (req: Request, res:Response){
        try {
            const token = req.headers.authorization as string
            const authenticationData = getData(token);

            if(authenticationData.role !== "NORMAL"){
                throw new Error("Apenas usuários normais tem acesso a essa funcionalidade")
            }

            const user = await getUserById(authenticationData.id);
            res.status(200).send({
                id: user.id,
                email: user.email,
                role: user.role
            })

        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }
}

