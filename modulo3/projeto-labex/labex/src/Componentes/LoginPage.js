import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    border: 2px solid whitesmoke;
    background-color: black;
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 60vw;
    height: 80vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`

function LoginPage () {
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    }

    const getInAdm = () =>{
        navigate("/admin-home-page")
    }

    return(
        <Container>
            <h1> Olá, eu sou a página Login Page</h1>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
            </div>
            <div>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={getInAdm}>ENTRAR</button>
            </div>
        </Container>
    )
};

export default LoginPage;