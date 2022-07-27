import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import {BASE_URL} from "../../Constants/urls";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { BigContainer, RecipeListContainer, AddRecipeButton } from "./Styled";
import { useNavigate } from "react-router-dom";

const RecipeList = () =>{
    useProtectedPage()
    const navigate = useNavigate()
    const goToAddRecipte =()=>{
        navigate(`/add-receitas`)
    }
    const goToRecipeDetail =(id)=>{
        navigate(`/detalhes/${id}`)
    }
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    const recipesCard = recipes.map((recipe)=>{
        return(
            <RecipeCard 
            key={recipe.recipe_id}
            image={recipe.image}
            title={recipe.title}
            onClick={()=>goToRecipeDetail(recipe.recipe_id)}
            />
        )
    })
    console.log(recipes)
    return(
        <BigContainer>
            <RecipeListContainer>
                {recipesCard}
            </RecipeListContainer>
            <AddRecipeButton onClick={goToAddRecipte}>ADICIONAR RECEITA</AddRecipeButton>
        </BigContainer>
    );
};

export default RecipeList;