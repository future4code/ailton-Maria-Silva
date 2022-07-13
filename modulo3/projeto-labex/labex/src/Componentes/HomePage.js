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
const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        height: 80px;
        width: 130px;
        padding: 10px;
        //background-color:black;
        //color: yellow;
        //border: 2px solid fuchsia;
    }
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
            <ContainerBotao>
                <button onClick={goToTrips}> VIAGENS </button>
                <button onClick={goToLogin}>ADMINISTRADOR</button>
            </ContainerBotao>
        </Container>
    )
};
export default HomePage;