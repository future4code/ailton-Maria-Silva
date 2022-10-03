import { IProductDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"

    public toProductDBModel = (product: Product): IProductDB =>{
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tags: product.getTags()
        }

        return productDB
    }

    public findByName = async(name:string):Promise<IProductDB | undefined> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({name})

        return result [0]
    }
    

}