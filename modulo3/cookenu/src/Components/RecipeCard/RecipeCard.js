import React from "react";
import {RecipeCardContainer, CardActionArea, CardImg, CardTitle} from "./Styled"


const RecipeCard = (props) =>{
    return(
        <RecipeCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardImg
                component={"img"} 
                src={props.image}
                alt={props.title}
                title={props.title}
                />
                <CardTitle>
                    {props.title}
                </CardTitle>
            </CardActionArea>
        </RecipeCardContainer>
    );
};
export default RecipeCard;