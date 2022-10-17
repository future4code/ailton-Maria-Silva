import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import {ProductInputDTO} from 

class ProductController {
    
    public createProduct = async (req:Request, res:Response) =>{
        try{
            const input: ProductInputDTO = {
                name: req.body.name
            }
            const productBusiness = new ProductBusiness()

            const response = await productBusiness.createProducts(input)
        } catch(error: any){
            res.status(500).send({message: error.message})
        }
    }
        
}