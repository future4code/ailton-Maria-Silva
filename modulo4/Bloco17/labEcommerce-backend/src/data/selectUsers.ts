import { AddUser } from "../types/userType";
import { connection } from "./connections";

export async function selectUsers():Promise<AddUser[] | undefined> {

    const result = await connection("labecommerce_users")

    return result
}