import { User } from "../types/userType";
import { connection } from "./connections";

export async function insertUser(){
    try{
        await connection().insert({
            name
        })
    } catch (error:any){

    }
}