import { IProductDB, Product, ITagDB, ITagsInProductsDB } from "../models/Product";
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

    public findProductById = async (productId: string): Promise< IProductDB | undefined> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({id: productId})

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
    public getProductsByName = async(name: string): Promise<IProductDB[]> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select("*")
        .where ({ name })

        return result
    }
    public getTagsByProductId = async (productId: string): Promise <any> =>{
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where({ product_id: productId})

        return result[0]
    }
    public getTag = async(productName: string): Promise<string[]>=>{
        const result: ITagsInProductsDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS_TAGS)
        .select("product_name")
        .where({product_name: productName})

        return result.map(item => item.product_name)

    }
    public findTag = async(productId: string, tag: string): Promise <ITagDB | undefined> =>{
        const result: ITagDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where({
            product_id: productId,
            tag: tag
        })
        return result[0]
    }
    public createTag = async(tagDB: ITagDB): Promise<void> =>{
        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .insert(tagDB)
    }
    public getProductByTag = async (name: string): Promise<any> =>{
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS_TAGS)
        .select()
        .where({name: name})
        
        return result[0]
    }
}