import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    //border: 2px solid whitesmoke;
    //background-color: black;
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 64vw;
    height: 84vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`


function ApplicationForm () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    };
    const sendIn = () => {
        alert("Aplicação para viagem recebida com sucesso!")
    }
    return(
        <Container>
            <h1> Olá, eu sou a página Application Form</h1>
            <div>
                <h2>Inscreva-se para uma viagem</h2>
            </div>
            <div>
                
                <input type="text" placeholder="Escolha uma viagem!"/>
                <input type="text" placeholder="Nome Completo"/>
                <input type="number" placehoder="Idade"/>
                <input type="text" placehoder="Texto de Candidatura"/>
                <input type="text" placeholder="Profissão"/>
                <input type="text" placeholder="Escolha um país"/>
            </div>
            <div>
                <button onClick={goBack}> VOLTAR </button>
                <button onClick={sendIn}> ENVIAR </button> 
            </div>
        </Container>
    )
};

export default ApplicationForm;