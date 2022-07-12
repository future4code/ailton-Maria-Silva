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


function TripDetails () {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    };

    return(
        <Container>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button>Inscrever-se</button>
            </div>
            <div>
                <h1> Olá, eu sou a página List Trips</h1>
            </div>
            <div>
                <p>Aqui vai a lista de viagem</p>
            </div>
        </Container>
    )
};

export default TripDetails;