import { AddProduct } from "../types/productType";
import { connection } from "./connections";

export async function selectedProductId(productId: string): Promise<AddProduct | undefined>{

    const [result] = await connection("labecommerce_products").select("*").where({id:productId})

    const productType: AddProduct = {
        id: result.id,
        name: result.name,
        price: result.price,
        image_url: result.image_url        
    }

    return productType
}