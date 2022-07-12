import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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


function AdmHome () {
    const navigate = useNavigate();

    const createTrip = () =>{
        navigate("/create-trip")
    }
    const goBack = () =>{
        navigate(-1)
    }

    const logOut = () =>{
        alert ("Você se desconectou!")
    }
    
    return (
        <Container>
            <div>
                <h2> Painel Administrativo </h2>
            </div>
            <div>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR VIAGEM</button>
                <button onClick={logOut}>LOUGOUT</button>
            </div>
            <div>
                <p> Ver Detalhes das Viagens </p>
            </div>
        </Container>

    )
};

export default AdmHome;