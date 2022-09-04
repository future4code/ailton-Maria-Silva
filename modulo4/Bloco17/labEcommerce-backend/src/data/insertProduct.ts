import { AddProduct } from "../types/productType";
import { connection } from "./connections";

export async function insertProduct (insertProduct: AddProduct): Promise<string>{

    await connection("labecommerce_products").insert({
        id: insertProduct.id,
        name: insertProduct.name,
        price: insertProduct.price,
        image_url: insertProduct.image_url
    });
    return `Produto adicionado com sucesso!`
}
