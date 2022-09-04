import { Request, Response} from "express";
import { selectUserId } from "../data/selectUserId"; 
import { selectedProductId } from "../data/selectedProductId";
import { Purchase } from "../types/purchaseType";
import  { insertPurchase } from "../data/insertPurchase"

export async function createPurchases(req: Request, res: Response){
    try {
        const {userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity){
            throw new Error ("Todos os valores deve ser preenchidos para continuar.")
        }

        const selectedUser = await selectUserId(userId)

        if(!selectedUser){
            throw new Error ("Usuário não foi encontrado.")
        }

        const selectedProduct = await selectedProductId(productId)

        if(!selectedProduct){
            throw new Error ("Produto não foi encontrado.")
        }

        const purchase: Purchase = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice: selectedProduct.price * quantity
        }

        const answer = await insertPurchase(purchase)



    } catch(error: any){
        res.status(500).send({message: error.message})
    }
}

