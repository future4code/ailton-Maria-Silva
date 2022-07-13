import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

    useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
    },[])
    
    return (
        <Container>
            <div>
                <h2> Painel Administrativo </h2>
            </div>
            <div>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR VIAGEM</button>
                <button onClick={logOut}>LOUGOUT</button>
            </div>
            <div>
                <p> Ver Detalhes das Viagens </p>
            </div>
        </Container>

    )
};

export default AdmHome;