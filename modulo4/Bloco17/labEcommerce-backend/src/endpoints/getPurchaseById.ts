import { Request, Response } from "express"
import { selectUserId } from "../data/selectUserId"
import { selectedPurchaseByUser } from "../data/selectedPurchaseByUser"


export async function getPurchaseById(req: Request, res: Response){
    
    try{
        const userId = req.params.userId

        const selectedUser = selectUserId(userId)

        if(!selectedUser){
            throw new Error("Usuário não encontrado.")
        }

        const purchasesByUser = await selectedPurchaseByUser(userId)

        if (!purchasesByUser){
            throw new Error("Compra não encontrada.")
        }

    }catch (error: any){
        res.status(500). send({message:error.message})
    }
}