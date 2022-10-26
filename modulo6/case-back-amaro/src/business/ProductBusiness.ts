import { ProductDatabase } from "../database/ProductDatabase"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IGetProductsOutputDTO, IProductDB, IPutTagInputDTO, IPutTagOutputDTO, Product, IGetProductsOutputDTOTwo } from "../models/Product"
import { IdGenerator } from "../services/IdGenerator"
import { RequestError } from "../errors/RequestError"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"

export class ProductBusiness {

    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        ) {}

    public createProduct = async (input: ICreateProductInputDTO): Promise<ICreateProductOutputDTO> =>{
        const { name } = input 

        if(!name) {
            throw new UnprocessableError("Preencher todos os campos para continuar.")
        }
        if( typeof name !== "string") {
            throw new RequestError("Parâmetro nome inválido.")
        }
        
        const productAlreadyExists = await this.productDatabase.findProductByName(name)
    
        if (productAlreadyExists){
            throw new ConflictError("Esse produto já existe.")
        }
        
        const product = new Product(
            this.idGenerator.generate(),
            name
        )
        await this.productDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Produto criado com sucesso.",
            product
        }

        return response
    } 
    public getProducts = async (): Promise<IGetProductsOutputDTO> =>{
        
        const productDB: IProductDB[] = await this.productDatabase.getProducts()

        const products = productDB.map(productDB =>{
            return new Product(
                productDB.id,
                productDB.name
            )
        })
        const response: IGetProductsOutputDTO = {
            products
        }
        return response
    }
    public getProductsByName = async (input: string): Promise<IGetProductsOutputDTO> =>{
        
        const { name } = input
        const productDB = await this.productDatabase.getProductsByName(name)
        const products = productDB.map(productDB =>{
            return new Product(
                productDB.id,
                productDB.name
            )
        })
        const response: IGetProductsOutputDTO = {
            products
        }
        return response
    }
    public getProductsByTags = async (input: any) =>{
        
        const {tags} = input

        const productDB = await this.productDatabase.getProductByTag(tags)
        for (let product of productDB){
            const productId: any = product.getId()
            const tagsDB = await this.productDatabase.getTag(productId)
            const mappedTags = tagsDB.map((tags) =>{
                return tags
            })
            product.setTags(mappedTags)
        }
    }
} 