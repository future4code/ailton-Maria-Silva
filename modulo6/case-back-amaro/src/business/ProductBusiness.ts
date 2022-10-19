import { ProductDatabase } from "../database/ProductDatabase"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IGetProductsOutputDTO, IProductDB, IPutTagInputDTO, IPutTagOutputDTO, Product, IGetProductsOutputDTOTwo } from "../models/Product"
import { IdGenerator } from "../services/IdGenerator"
import { RequestError } from "../errors/RequestError"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"

// endPoint para inserir dados

// endPoit para consulta de dados: pode ser consultado pelo id, nome ou tags

// se for pela tag tem que mostrar todos os produtos que tem a tal tag

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
    public getProductsTwo = async (): Promise<IGetProductsOutputDTOTwo> =>{
        
        const productsDB = await this.productDatabase.getProducts()

        const products: Product[] = []

        for (let productDB of productsDB) {
            const product = new Product(
                productDB.name,
                []
            )
        const tags = await this.productDatabase.getTag(productDB.name)

        product.setTags(tags)

        products.push(product)
        }
        const response: IGetProductsOutputDTOTwo = {
            message: "Produtos retornados com sucesso",
            products: products.map((product) => ({
                name: product.getName(),
                tags: product.getTags()
            }))
        }
        return response
    }
    public addTag = async (input: IPutTagInputDTO): Promise <IPutTagOutputDTO> =>{
        
        const { productId } = input
        
        const productDB = await this.productDatabase.findProductById(productId)

        if(!productDB){
            throw new NotFoundError("Produto não encontrado.")
        }
        const tags = await this.productDatabase.getTagsByProductId(productId)

        const product = new Product(
            productDB.id,
            productDB.name,
            productDB.tags
        )
        
        const response: IPutTagOutputDTO = {
            message: "Tag adicionada com sucesso",
            product
        }

        return response
        
    }

} 