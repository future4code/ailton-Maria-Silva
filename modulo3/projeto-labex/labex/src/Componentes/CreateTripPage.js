import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';

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
const CreateTripInput = styled.input`
    width: 80%;
    height: 30px;
    border-color: yellow;
    border-width: 1px;
    padding: 4px 8px;
    margin: 0px 0px 15px;

`

function CreateTrip () {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    const createTrip = () => {
        alert("Viagem criada com sucesso!!!")
    };
    
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
    },[])


     return(
        <Container>
            <h1> Olá, eu sou a página de Criar VIAGENS</h1>
            <div>
                <h2>Crie uma viagem</h2>
            </div>
            <div>
                <CreateTripInput type="text" placeholder="Nome da viagem" />
                <CreateTripInput type="text" placeholder="Escolha um Planeta" />
                <CreateTripInput type="date" placeholder="dd/mm/aaaa" />
                <CreateTripInput type="text" placeholder="Descrição" />
                <CreateTripInput type="text" placeholder="Duração em dias" />
            </div>
            <div>
                <button onClick={goBack}>Voltar</button>
                <button onClick={createTrip}>Criar</button>
            </div>
        </Container>
    )
};

export default CreateTrip;