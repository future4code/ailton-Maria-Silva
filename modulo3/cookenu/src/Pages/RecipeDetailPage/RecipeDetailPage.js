import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/urls";
import { ScreenContainer, RecipeContainer, RecipeImage } from "./Styled";

const RecipeDetail = () =>{
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData({}, `${BASE_URL}/recipe/${params.id}`) [0];
    return(
        <ScreenContainer>
            {recipe ?
                <RecipeContainer>
                    <RecipeImage src={recipe.image}/>
                    <h1>{recipe && recipe.title.toUpperCase()}</h1>
                    <p>{recipe.description}</p>
                </RecipeContainer>
                : <img src="https://www.avenidacenter.com.br/img/loading.gif"/>
            }
        </ScreenContainer>
    );
};

export default RecipeDetail;