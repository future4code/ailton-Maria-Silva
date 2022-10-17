import { ProductDatabase } from "../database/ProductDatabase"
import { IGetProductsOutputDTO, Product } from "../models/Product"
import { IdGenerator } from "../services/IdGenerator"


export class ProductBusiness {

    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        ) {}

    public getProducts = async (): Promise< IGetProductsOutputDTO | undefined> =>{
        
        const products = productDB[0].map((product:any) =>{
            return new Product (
                product.id,
                product.name
            )
        })

        for (let productDB of productDB){
            const product = new Product(
                productDB.name,
                []
            )
        const tags = await this.productDatabase.getTags(productDB.name)
        
        product.setTags(tags)

        products.push(tags)
        }
        const response: IGetProductsOutputDTO = {
        }

        return 
    }
    public createProduct = async(): Promise<undefined> =:{
        const 
    }


}