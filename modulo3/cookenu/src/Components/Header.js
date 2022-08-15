import React from 'react';
import { MainContainer, PrettyButton } from './Styled';
import {useNavigate} from "react-router-dom"


const Header = ({logButton, setLogButton}) =>{
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const goRecipesList = () =>{
        navigate("/")
    };
    const logout = () =>{
        localStorage.removeItem("token")
    };
    const logAction = () =>{
        if(token){
        logout()
        setLogButton("LOGIN")
        navigate("/login")
        } else {
            navigate("/login")
        }
    };
    return (
        <MainContainer>
            <PrettyButton onClick={() => goRecipesList()}>HOME</PrettyButton> 
            <PrettyButton onClick={logAction}>{logButton}</PrettyButton>
        </MainContainer>
    );
};
export default Header;