import { connection } from "./connections"

export async function selectedPurchaseByUser(userId: string){

    const result = await connection.raw(`
    SELECT 
    labecommerce_users.id as personId,
     labecommerce_users.name as personName, 
     labecommerce_products.name productName,
     labecommerce_purchases.id 
     AS FROM labecommerce_purchases
     INNER JOIN labecommerce_users
     ON labecommerce_purchases.user_id = labecommerce_users.id
     INNER JOIN labecommercer_products
     ON 
     labecommerce_purchases.product_id = labecommerce_products.id
     WHERE labecommerce_users.id = "${userId}";
     `)

     return 
}