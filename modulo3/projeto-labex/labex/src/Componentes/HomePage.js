import React from 'react';
import styled from 'styled-components';
import spaceship from './img/spaceship.gif';
import { useNavigate } from 'react-router-dom';
import BtnEnviar from './img/BtnEnviar.jpg'

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
const Logo = styled.div`
    >img{
        max-width: 400px;
        max-height: 400px;
        padding-top:8%;
    }
`
const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        height: 80px;
        width: 130px;
        padding: 10px;
        background-color:black;
        color: yellow;
        border: 2px solid fuchsia;
    }
`
const EssaImagem = styled.img`
    width: 100px;
    height: 100px;
`
function HomePage () {

    const navigate = useNavigate();

    const goToTrips = () => {
        navigate("/list-trips")
    };
    const goToLogin =()=>{
        navigate("/login")
    };
    
    return (
        <Container>
            <Logo>
                <img src={spaceship} alt="logo da letra X" />
            </Logo>            
            <ContainerBotao>
                <button onClick={goToTrips}> <EssaImagem src={BtnEnviar} /> </button>
                <button onClick={goToLogin}>ADMINISTRADOR</button>
            </ContainerBotao>
        </Container>
    )
};
export default HomePage;