import { AddUser } from "../types/userType";
import { connection } from "./connections";

export async function insertUser(insertUser: AddUser): Promise<string>{
    
        await connection("labecommerce_users").insert({
            id: insertUser.id,
            name: insertUser.name,
            email: insertUser.email,
            password: insertUser.password
        })
        return `Usuario criado com sucesso.`
}
