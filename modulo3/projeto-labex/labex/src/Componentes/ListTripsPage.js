import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
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

const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        padding: 12px;
        background-color:black;
        color: yellowgreen;
        text-shadow: fuchsia;
        border: 2px solid fuchsia;
        font-weight: bold;
        //border-top-left-radius: 30px;
        //border-bottom-right-radius: 30px;
        text-shadow: blueviolet;
    }
`

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
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline-ailton/trips`)
        .then((response)=>{
            setGetTripsList(response.data)
            console.log(response.data.results)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);
    
    return(
        
        <Container>
            <div>
                <h2>Ver as Viagens disponiveis</h2>
            </div>
            <ContainerBotao>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={goToApplySelf}>INSCREVER-SE</button>
            </ContainerBotao>
            <div>

            </div>
        </Container>
    )
};

export default ListTrips;