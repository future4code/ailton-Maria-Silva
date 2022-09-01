import { Usuario } from "../types/usuario";
import { connection } from "./connection";

export async function inserirUsuario(cadastroUsuario: Usuario){

    try {
        const {logradouro, bairro, cidade, estado} = cadastroUsuario

    await connection().insert({
        logradouro,
        bairro,
        cidade,
        estado
    }).into("usuarioCEP")

    } catch (error:any){
        console.log(error)
    }
    
    
    

}