import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import { ContainerBotao } from './Style';
import { ContainerTrips } from './Style';

function ListTrips () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goToApplySelf = () => {
        navigate("/app-form")
    }

    const [getTripsList, setGetTripsList] = useState([]);

    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips`)
        .then((response)=>{
            setGetTripsList(response.data.trips)
            console.log(response.data.trips)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);
    
    return(
        
        <Container>
            <div>
                <h2>VIAGENS DISPONÍVEIS</h2>
            </div>
            <div>
                {getTripsList.map((trips)=>{
                    return (
                        <ContainerTrips key={trips.id}>
                            <h3>Viagem para: {trips.name}</h3>
                            <p>Descrição: {trips.description}</p>
                            <p>Planeta: {trips.planet}</p>
                            <p>Duração: {trips.duration}</p>
                            <p>Data de partida:{trips.date}</p>
                            <ContainerBotao>
                                <button onClick={goToApplySelf}>INSCREVER-SE</button>
                            </ContainerBotao>
                        </ContainerTrips>
                    )
                })}
            </div>
            <ContainerBotao>
                <button onClick={goBack}>VOLTAR</button>
            </ContainerBotao>
        </Container>
    )
};

export default ListTrips;