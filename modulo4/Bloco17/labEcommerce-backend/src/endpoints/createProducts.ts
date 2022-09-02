import { Request, Response} from "express";
import { AddProduct, Product } from "../types/productType";
import { insertProduct } from "../data/insertProduct";

export async function createProduct (req: Request, res: Response){
    try {
        const {name, price, image_url}: Product = req.body

        if(!name || !price || !image_url){
            throw new Error("Todos os valores devem ser preenchidos.")
        }

        const addProduct : AddProduct = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        const aswer = await insertProduct(addProduct)

    } catch(error:any){
        res.status(500).send({message: error.message})
    }
}