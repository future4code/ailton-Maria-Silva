import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import { Container } from './Style';
import { CreateTripInput } from './Style';

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