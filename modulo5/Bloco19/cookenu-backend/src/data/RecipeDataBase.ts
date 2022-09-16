import { Recipe } from "../model/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase{
    
    public async createRecipe(recipe: Recipe): Promise<void>{
        try {
            await BaseDataBase.connection("Receitas_Cookenu")
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                created_at: recipe.getCreatedAt(),
                user_id: recipe.getUserId()
            }).into("Receitas_Cookenu")
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }

    public async findRecipeByTitle(title:string): Promise<Recipe | undefined>{
        try {
            const recipe = await this.getConnection()
            .select("*")
            .from("Receitas_Cookenu")
            .where({title: title});
            return recipe[0] && Recipe.toRecipeModel(recipe[0])
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }
    public async findRecipeById(id:string): Promise<Recipe | undefined>{
        try {
            const recipe = await this.getConnection()
            .select("*")
            .from("Receitas_Cookenu")
            .where({id: id});
            return recipe[0] && Recipe.toRecipeModel(recipe[0])
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }
}