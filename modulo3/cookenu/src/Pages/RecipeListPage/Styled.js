import styled from "styled-components";

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 8%;
    margin-right: 0%;
    margin-top: 2%;
    gap: 16px;
`
export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-bottom: 16px;
`
export const AddRecipeButton = styled.button`
    background-color: white;
    color: red;
    border: 1px solid red;
    font-size: large;
    padding: 20px;
    :hover{
        cursor: pointer;
        border: 1px solid red;
        background-color: red;
        color: white;
    }
`