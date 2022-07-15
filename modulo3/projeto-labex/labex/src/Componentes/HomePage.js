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
            <img src="https://www.pinclipart.com/picdir/big/88-882904_mermaiden-crystal-dress-up-game-white-x-icon.png" />           
            <ContainerBotao>
                <button onClick={goToTrips}> VIAGENS </button>
                <button onClick={goToLogin}>ADMINISTRADOR</button>
            </ContainerBotao>
        </Container>
    )
};
export default HomePage;