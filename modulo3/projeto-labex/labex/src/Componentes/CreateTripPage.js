import React from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';

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

function CreateTrip () {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    const createTrip = () => {
        alert("Viagem criada com sucesso!!!")
    };
     return(
        <Container>
            <h1> Olá, eu sou a página de Criar VIAGENS</h1>
            <div>
                <h2>Crie uma viagem</h2>
            </div>
            <div>
                <input type="text" placeholder="Nome da viagem" />
                <input type="text" placeholder="Escolha um Planeta" />
                <input type="date" placeholder="dd/mm/aaaa" />
                <input type="text" placeholder="Descrição" />
                <input type="text" placeholder="Duração em dias" />
            </div>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button onClick={createTrip}>Criar</button>
            </div>
        </Container>
    )
};

export default CreateTrip;