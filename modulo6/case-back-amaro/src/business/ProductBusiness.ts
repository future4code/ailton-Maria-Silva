import { ProductDatabase } from "../database/ProductDatabase"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, Product } from "../models/Product"
import { IdGenerator } from "../services/IdGenerator"
import { RequestError } from "../errors/RequestError"
import { ConflictError } from "../errors/ConflictError"

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

} 