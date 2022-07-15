import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import {ContainerBotao} from './Style';

function TripDetails () {

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1)
    };
    useEffect(()=>{
        const token = localStorage.getItem('token');

        if (token === null) {
            console.log("Não está logado")
            navigate('/login')
        }
    },[])
    useEffect(() => {
        const toke = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trip/NoIFVcOiSgTKTIPVZwXS`, {
            header: {
                auth: toke
            }
        }) // path.id
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    },[]);

    return(
        <Container>
            <ContainerBotao>
                <button onClick={goBack}>Voltar</button>
                <button>Inscrever-se</button>
            </ContainerBotao>
            <div>
                <h1> Olá, eu sou a página List Trips</h1>
            </div>
            <div>
                <p>Aqui vai a lista de viagem</p>
            </div>
        </Container>
    )
};

export default TripDetails;