import React from "react";
import { ScreenContainer } from "./Styled";
import { LogoImg } from "./Styled";

const ErrorPage = () =>{
    return(
        <ScreenContainer>
            <LogoImg src="https://www.route66sodas.com/wp-content/uploads/2019/01/Alert.gif" alt="alerta de erro"  />
            <h1>Erro! Página não encontrada!</h1>
        </ScreenContainer>
    );
};

export default ErrorPage;