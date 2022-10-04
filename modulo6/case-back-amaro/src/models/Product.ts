export interface ITagsDB {
    tag: string
}

export interface IProductDB {
    id: string,
    name: string,
    tags: ITagsDB[]
}

export class Product {
    constructor (
        private id: string,
        private name: string,
        private tags: string[]
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