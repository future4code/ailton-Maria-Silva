import { Request, Response } from "express";
import { selectUsers } from "../data/selectUsers"

export async function getAllUsers(req: Request, res: Response) {
    try {
        const allUsers = await selectUsers()

        res.status(200).send(allUsers)
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}