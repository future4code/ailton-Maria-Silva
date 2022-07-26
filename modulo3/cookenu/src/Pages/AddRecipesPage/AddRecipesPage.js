import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";

const AddRecipes = () =>{
    useProtectedPage()
    return(
        <div>
            <h2>Add Recipes</h2>
        </div>
    );
};

export default AddRecipes;