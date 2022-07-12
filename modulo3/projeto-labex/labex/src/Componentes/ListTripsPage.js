import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

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

const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        height: 100px;
        width: 150px;
        padding: 10px;
        background-color:black;
        color: yellow;
        border: 2px solid fuchsia;
        font-weight: bold;
    }
`

function ListTrips () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goToApplySelf = () => {
        navigate("/app-form")
    }
    
    return(
        <Container>
            <div>
                <h2>Ver as Viagens disponiveis</h2>
            </div>
            <ContainerBotao>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToApplySelf}>Inscrever-se</button>
            </ContainerBotao>
            <div>
                <p>Viagens disponiveis</p>
            </div>
            
        </Container>
    )
};

export default ListTrips;