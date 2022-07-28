import React from "react";
import { ScreenContainer, LogoImg, SignUpButton } from "./Styled";
import logoPanela from "../../Assets/logoPanela.png";
import {useNavigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const Login = ({setLogButton}) =>{
    useUnprotectedPage()
    const navigate = useNavigate()
    const  goSignUp = () =>{
        navigate("/cadastro")
    };
    return(
        <ScreenContainer>
            <LogoImg src={logoPanela} alt="desenho de uma panela"/>
            <LoginForm setLogButton={setLogButton}/>
            <div>
                <SignUpButton 
                onClick={goSignUp}>
                    Não possui conta? Cadastre-se
                </SignUpButton>
            </div>
        </ScreenContainer>
    );
};

export default Login;