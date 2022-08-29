import { Request, Response } from "express";

async function createUser( req: Request, res: Response){
    try {
       if (
        !req.body.name ||
        !req.body.nickname ||
        !req.body.email
       )
       {
        res
            .status(400)
            .send("Preencha todos os campos para prosseguir")
       }
       const id: string = Date.now() + Math.random().toString

       await insertUsers(
        id,
        req.body.name,
        req.body.nickname,
        req.body.email
       )

    } catch(error: any)
}

async function insertUser( id: string, name: string, nickname: string, email:string){
    await connection.insert({
        id,
        name,
        nickname,
        email
    }).into(ToDoUser)
}