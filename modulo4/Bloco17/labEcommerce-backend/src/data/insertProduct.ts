import { AddProduct } from "../types/productType";
import { connection } from "./connections";

export async function insertProduct (product: AddProduct): Promise<string>{
    const {id, name, price, image_url} = product

    await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url
    })
    return (`Produto adicionado com sucesso!`)
}