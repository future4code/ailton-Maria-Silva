import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage"

const RecipeDetail = () =>{
    useProtectedPage()
    return(
        <div>
            <h2>Recipe Detail</h2>
        </div>
    );
};

export default RecipeDetail;