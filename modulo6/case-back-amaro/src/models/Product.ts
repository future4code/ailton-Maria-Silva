export interface ITagsInProductsDB {
    id: string,
    product_name: string,
    product_tag: string
}

export interface ITagDB {
    name: string
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
        private tags?: Array<string>
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
    public setTags = (newTags: string[]) =>{
        this.tags = newTags
    }
    public addTags = (newTag:string) =>{
        this.tags?.push(newTag)
    }
}
export interface ICreateProductInputDTO{
    name: string
}
export interface ICreateProductOutputDTO{
    message: string,
    product: Product
}
export interface IGetProductsOutputDTO{
    products: Product[]
}
export interface IPutTagInputDTO{
    productId: string,
    tag: string
}
export interface IPutTagOutputDTO{
    message: string,
    product: Product
}
export interface IGetProductsOutputDTOTwo{
    message: string,
    products: {
        name: string,
        tags: string[]
    }[]
}