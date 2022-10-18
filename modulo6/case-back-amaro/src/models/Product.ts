export interface ITagsDB {
    tag: string
}

export interface IProductDB {
    id: string,
    name: string,
    tags?: Array<string>
}

export class Product {
    constructor (
        private id: string,
        private name: string,
        private tags?: ITagsDB[]
    ) {}

    public getId = () =>{
        return this.id
    }
    public getName = () =>{
        return this.name
    }
    public getTags = () =>{
        return this.tags
    }
}
export interface ICreateProductInputDTO{
    name: string
}
export interface ICreateProductOutputDTO{
    message: string,
    product: Product
}
export interface IGetProductsOutpDTO{
    products: Product[]
}
export interface IPutTagInputDTO{
    productId: string,
    tag: string
}
export interface IPutTagOutputDTO{
    message: string,
    product: string
}