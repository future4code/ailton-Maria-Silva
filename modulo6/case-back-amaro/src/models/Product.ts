export interface ITagsDB {
    tag: string
}

export interface IProductDB {
    id: string,
    name: string,
    tags: string[]
}

export class Product {
    constructor (
        private id: string,
        private name: string,
        private tags?: string[]
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

export interface IGetProductsByNameInputDTO {
    name: string
}

export interface IGetProductsOutputDTO {
    id: string,
    name: string,
    tags: string[]
}

export interface IGetProductsByTagInputDTO {
    tag: string
}

export interface IProductTagsDB {
    name_products: string,
    name_tags: string
}