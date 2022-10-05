import { IProductDB, Product, IProductTagsDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCTS_TAGS = "Amaro_Product_Tags"

    public toProductDBModel = (product: Product): IProductDB =>{
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tags: product.getTags()
        }

        return productDB
    }

    public getProducts = async (): Promise<IProductDB[]> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()

        return result
    }
    public getTags = async (productName: string): Promise<string[]> =>{
        const result: IProductTagsDB[] = await BaseDatabase
        .connection("name_tags")
        .where({ name_product: productName})

        return result.map(item => item.name_tags)
    }

    public findProductByName = async(name:string):Promise<IProductDB | undefined> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({name})

        return result [0]
    }
    

}