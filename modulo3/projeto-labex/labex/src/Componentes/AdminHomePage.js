import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import { ContainerTrips} from './Style';

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

   /* deleteTrip = () => {
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
                <h2> Painel Administrativo </h2>
            </div>
            <div>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR VIAGEM</button>
                <button onClick={logOut}>LOUGOUT</button>
            </div>
            <div>
                {getTripsList.map((trips)=>{
                    return (
                        <ContainerTrips key={trips.id}>
                            <h4>{trips.name}</h4>
                            <button>APAGAR</button>
                        </ContainerTrips>
                    )
                })}
            </div>
            <div>
                <h3>Candidatos Para Aprovar</h3>
            </div>
        </Container>

    )
};

export default AdmHome;