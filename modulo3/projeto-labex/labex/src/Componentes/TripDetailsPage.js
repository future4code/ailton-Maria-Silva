import React, { useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            <div>
                <button onClick={goBack}>Voltar</button>
                <button>Inscrever-se</button>
            </div>
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