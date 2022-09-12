import { AddUser } from "../types/userType";
import { connection } from "./connections";

export async function selectUserId(userId: string): Promise<AddUser | undefined>{

    const [result] = await connection("labecommerce_users").select("*").where({id:userId})

    const userType: AddUser = {
        id: result.id,
        name: result.name,
        email: result.email,
        password: result.password
    }

    return userType
}