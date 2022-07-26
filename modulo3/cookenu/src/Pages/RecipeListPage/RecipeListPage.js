import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import {BASE_URL} from "../../Constants/urls"


const RecipeList = () =>{
    useProtectedPage()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes)
    const recipesCard = recipes.map((recipe)=>{
        return(
            <p>{recipe.title}</p>
        )
    })
    return(
        <div>
            <h2>Recipe List</h2>
            {recipesCard}
        </div>
    );
};

export default RecipeList;