import { Request, Response } from "express";
import { createUser } from "../data/User";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { getUserById } from "../data/User";


export async function login (req: Request, res: Response){
    try{
        if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error ("E-mail inválido");
        }

        if(!req.body.password || req.body.password.length < 6){
            throw new Error ("Senha inválida.");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        }
        const id = generateId();

        await createUser(id, userData.email, userData.password);
        const token = generateToken({
            id,
        });
        res.status(200).send({
            token,
        })
    } catch(error:any){
        res.status(400).send({message:error.message})
    }
}

export async function getUser(req: Request, res: Response){
    try{
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({id: user.id, email: user.email})

     } catch(error:any){
        res.status(400).send({message: error.message});
    }
}