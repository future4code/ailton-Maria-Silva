import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Style';
import { ContainerBotao } from './Style';

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