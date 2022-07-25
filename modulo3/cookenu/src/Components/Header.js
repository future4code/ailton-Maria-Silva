import React from 'react';
import { MainContainer, PrettyButton } from './Styled';
import {useNavigate} from "react-router-dom"


const Header = () =>{
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate("/login")
    };
    const goRecipesList = () =>{
        navigate("/")
    };


    return (
        <div>
            <MainContainer>
                <div>
                    <PrettyButton onClick={() => goRecipesList()}>HOME</PrettyButton> 
                </div>
                <div>
                    <PrettyButton onClick={() => goToLogin()}>LOGIN</PrettyButton>
                </div>
            </MainContainer>

        </div>


    );
};
export default Header;