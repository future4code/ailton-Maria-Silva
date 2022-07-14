import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import { Container } from './Style';
import { CreateTripInput } from './Style';
import { SelectTrip } from './Style';

function ApplicationForm () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    };

    const [tripsList, setTripsList] = useState ([]);
    const [tripName, setTripName] = useState("");
    
    const changeTripName = (e) => {
        setTripName(e.target.value)
    }

    useEffect (()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips')
            .then((response)=>{
                setTripsList(response.data?.trips)
                console.log(response.data.trips)
            }).catch((error)=>{
                console.log(error)
            })
    },[]);

    const sendIn = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips/:id/apply`)
        .then((response) =>{
            console.log(response);
            alert("Aplicação para viagem recebida com sucesso!");
        }).catch((error)=>{
            console.log(error);
        })
    };
    
    return(
        <Container>
            <div>
                <h2>INSCREVA-SE PARA UMA VIAGEM</h2>
            </div>
            <div>
                <SelectTrip onChange={changeTripName}>
                    <option value={""}> Escolha uma Viagem </option> 
                    {tripsList.map((trips)=>{
                        return (
                    <option key={trips.id} value={trips.name}>
                        {trips.name}
                    </option>
                            )
                        })} 
                    </SelectTrip>
                <CreateTripInput 
                    type="text" 
                    placeholder="Nome Completo"
                    //required
                    //type="text"
                     />
                <CreateTripInput 
                    type="number"
                    placehoder="Idade"
                    //required
                    //pattern={"a-z"}
                    //title={"O viajante deve ser maior de 18"}
                    />
                <CreateTripInput 
                    type="text" 
                    placehoder="Texto de Candidatura"/>
                <CreateTripInput 
                    type="text" 
                    placeholder="Profissão"/>
                <CreateTripInput 
                    type="text" 
                    placeholder="Escolha um país"/>

            </div>
            <div>
                <button onClick={goBack}> VOLTAR </button>
                <button onClick={sendIn}> ENVIAR </button> 
            </div>
        </Container>
    )
};

export default ApplicationForm;