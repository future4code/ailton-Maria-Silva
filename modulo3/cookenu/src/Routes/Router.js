import React from "react";
import {Routes, Route} from "react-router-dom";
import AddRecipes from "../Pages/AddRecipesPage/AddRecipesPage";
import Login from "../Pages/LoginPage/LoginPage";
import RecipeDetail from "../Pages/RecipeDetailPage/RecipeDetailPage";
import RecipeList from "../Pages/RecipeListPage/RecipeListPage";
import SignUp from "../Pages/SignUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = ({setLogButton}) =>{
    return (
            <Routes>
                <Route path="/add-receitas" element= {<AddRecipes />} />
                <Route path="/cadastro" element= {<SignUp setLogButton={setLogButton} />} />
                <Route path="/login" element= {<Login setLogButton={setLogButton}/>} />
                <Route path="/detalhes/:id" element= {<RecipeDetail />} />
                <Route index element= {<RecipeList />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
    );
};
export default Router;