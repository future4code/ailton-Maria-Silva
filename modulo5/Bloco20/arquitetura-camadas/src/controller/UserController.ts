import {Request, Response} from "express";

import { userDTO } from "../model/User";

export class UserController {
    async create(req: Request, res: Response ){
        const {name, email, password, role} = req.body

        const userBusiness = new UserBusiness()

        const user: userDTO = {
            name,
            email,
            password,
            role
        }

        const token = await userBusiness.create(user)
        res.status(201).send({message:token})
    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
    
}