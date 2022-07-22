import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import { ContainerTrips} from './Style';
import {ContainerBotao} from './Style';

function AdmHome () {
    const navigate = useNavigate();

    const createTrip = () =>{
        navigate("/create-trip")
    }
    const goBack = () =>{
        navigate(-1)
    }
    const logOut = () =>{
        alert ("Você se desconectou!")
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

     /*

         useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
    },[])
    
    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trip/${getTripsList.id}`).
        then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error)
        })
    },[])

   
    deleteTrip = () => {
        axios.del(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips/:id`)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    } */
    
    return (
        <Container>
            <div>
                <h2> PAINEL ADMINISTRATIVO </h2>
            </div>
            <ContainerBotao>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR VIAGEM</button>
                <button onClick={logOut}>LOUGOUT</button>
            </ContainerBotao>
            <div>
                {getTripsList.map((trips)=>{
                    return (
                        <ContainerTrips key={trips.id}>
                            <h4>{trips.name}</h4>
                            <p>{trips.description}</p>
                            <ContainerBotao>
                                <button>APAGAR</button>
                            </ContainerBotao>
                            <h5>CANDIDATOS PARA APROVAR</h5>
                            <div>

                            </div>
                            <p>"Fulane"</p>
                            <ContainerBotao>
                                <button>ACEITAR</button>
                                <button>REJEITAR</button>
                            </ContainerBotao>
                        </ContainerTrips>
                    )
                })}
            </div>
        </Container>

    )
};

export default AdmHome;