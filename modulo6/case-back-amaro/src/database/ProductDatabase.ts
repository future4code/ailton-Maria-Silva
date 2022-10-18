import { IProductDB, Product, ITagsDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCTS_TAGS = "Amaro_Product_Tags"

    public toProductDBModel = (product: Product): IProductDB =>{
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }
        return productDB
    }

    public findProductById = async (id: string): Promise< IProductDB | undefined> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({id: id})

        return result[0]
    }
    public findProductByName = async (name: string): Promise<IProductDB | undefined> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({name: name})

        return result[0]
    }

    public createProduct = async(product: Product): Promise<void> =>{
        const productDB = this.toProductDBModel(product)
        
        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert(productDB)
    }
    public getProducts = async(): Promise<IProductDB[]> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()

        return result
    }
    public getTagsByProductId = async (productId: string): Promise <any> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where({ product_id: productId})

        return result[0]
    }
    public findTag = async(productId: string, tag: string): Promise <ITagsDB | undefined> =>{
        const result: ITagsDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where({
            product_id: productId,
            tag: tag
        })
        return result[0]
    }
    public createTag = async(tagDB: ITagsDB): Promise<void> =>{
        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .insert(tagDB)
    }
}