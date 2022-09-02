import { AddProduct } from "../types/productType";
import { connection } from "./connections"

export async function selectAllProducts(): Promise<AddProduct[] | undefined>{
    const result = await connection("labecommerce_products")

    return result
}