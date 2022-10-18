import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ICreateProductInputDTO } from "../models/Product";
import { BaseError } from "../errors/BaseError";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public createProduct = async (req: Request, res: Response) =>{
        try {
            const input: ICreateProductInputDTO = {
                name: req.headers.name
            }
            const response = await this.productBusiness.createProduct(input)
            res.status(201).send(response)
        } catch (error:any) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({message: "Erro inesperado ao criar produto."})
        }
    }
    
} 