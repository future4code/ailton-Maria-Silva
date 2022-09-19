export class Recipe {
    private id: string
    private title: string
    private description: string
    private createdAt: string
    private userId: string


    constructor(id: string, title: string, description: string, createdAt: string, userId: string){
        this.id = id,
        this.title = title,
        this.description = description,
        this.createdAt = createdAt,
        this.userId = userId

    };

    public getId(){
        return this.id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description
    }
    public getCreatedAt(){
        return this.createdAt
    }
    public getUserId(){
        return this.userId
    }    

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.createdAt, data.userId)
    }
}