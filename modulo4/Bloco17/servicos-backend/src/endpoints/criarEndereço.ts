import { Request, Response } from "express";
import { inserirUsuario } from "../data/inserirUsuario";
import { requisicaoCep } from "../services/requsicaoCep";
import { Usuario } from "../types/usuario";

export async function criarEndereco (req: Request, res: Response){
    let errorCode = 400;
    try {
        const cep = req.params.cep
        console.log(cep)

        if(!cep){
            res.statusCode = 404
            throw new Error ("Precisa preencher com um CEP válido.")
        }
        const consultaCep = await requisicaoCep(cep)

        if(!consultaCep){
            res.statusCode = 404
            throw new Error (`Não existe cep com o endereço: ${cep}`)
        }

        const cadastroUsuario: Usuario = {
            bairro: consultaCep.bairro,
            cidade: consultaCep.localidade,
            logradouro: consultaCep.logradouro,
            estado: consultaCep.uf,
            CEP: consultaCep.CEP,
            numero: consultaCep.numero,
            complemento: consultaCep.complemento
        }  

        await inserirUsuario(cadastroUsuario)

        res.status(201).send("Usuario cadastrado com sucesso!")

    } catch(error: any){
        res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
    }
}