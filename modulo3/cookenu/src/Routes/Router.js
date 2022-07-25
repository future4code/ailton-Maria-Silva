import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddRecipes from "../Pages/AddRecipesPage/AddRecipesPage";
import Login from "../Pages/LoginPage/LoginPage";
import RecipeDetail from "../Pages/RecipeDetailPage/RecipeDetailPage";
import RecipeList from "../Pages/RecipeListPage/RecipeListPage";
import SignUp from "../Pages/SignUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Header from "../Components/Header";

const Router = () =>{
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/add-receitas" element= {<AddRecipes />} />
                <Route path="/cadastro" element= {<SignUp />} />
                <Route path="/login" element= {<Login />} />
                <Route path="/detalhes/:id" element= {<RecipeDetail />} />
                <Route index element= {<RecipeList />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;