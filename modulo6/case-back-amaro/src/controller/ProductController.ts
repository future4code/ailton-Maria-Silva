import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ICreateProductInputDTO, IGetProductByNameInputDTO, IPutTagInputDTO } from "../models/Product";
import { BaseError } from "../errors/BaseError";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public createProduct = async (req: Request, res: Response) =>{
        try {
            const input: ICreateProductInputDTO = {
                name: req.body.name
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
    public getProducts = async (req: Request, res: Response) =>{
        try {
            const response = await this.productBusiness.getProducts()
            res.status(200).send(response)
        } catch (error:any) {
            if(error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message})
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produto"})
        }
    }
    public getProductsByName = async (req: Request, res: Response) =>{
        try {
            const input: any = {
                name: req.query.name
            }
            const response = await this.productBusiness.getProductsByName(input)
            res.status(200).send(response)
        } catch (error) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: "Erro inesperado ao pesquisar tag."})
            }
        }
    }
    public getProductsByTags = async (req: Request, res: Response) =>{
        try {
            const input : any = {tags: req.query.tags}
            
            const response = await this.productBusiness.getProductsByTags(input)
            res.status(200).send({ products: response});
        } catch (error:any) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: "Erro inesperado ao pesquisar tag."})
            }
        }
    }
    
} 