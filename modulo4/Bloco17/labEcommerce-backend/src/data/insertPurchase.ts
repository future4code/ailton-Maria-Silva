import { Purchase } from "../types/purchaseType";
import { connection } from "./connections";

export async function insertPurchase(purchase: Purchase):Promise<string>{

    const {id, userId, productId, quantity, totalPrice} = purchase

    await connection("labecommerce_purchases").insert({
        id,
        user_id: userId,
        product_id: productId,
        quantity,
        totalPrice
    })

    return `Compra registrada com sucesso`
}