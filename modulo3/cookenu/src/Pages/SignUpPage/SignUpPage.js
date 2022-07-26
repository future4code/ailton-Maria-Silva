import React from "react";
import { ScreenContainer, LogoImg } from "./Styled";
import logoPanela from "../../Assets/logoPanela.png";
import SignUpForm from "./SignUpForm"
//import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const SignUp = ({setLogButton}) =>{
    //useUnprotectedPage()
    return(
        <ScreenContainer>
            <LogoImg src={logoPanela} alt="desenho de uma panela"/>
            <SignUpForm setLogButton={setLogButton}/>
        </ScreenContainer>
    );
};

export default SignUp;