import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    color: white;
    margin: 15%;
    width: 60vw;
    height: 50vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const BotaoRosa = styled.button`
    border: none;
    background-color: fuchsia;
`
const BotaoAzul = styled.button`
    border:none;
    background-color: blue;
`


function HomePage () {
    return (
        <Container>
            <div>
                <h1> X </h1>
            </div>            
            <div>
                <BotaoRosa>VIAGENS</BotaoRosa>
                <BotaoAzul>ADMINISTRATIVO</BotaoAzul>
            </div>

        </Container>
    )
}

export default HomePage;