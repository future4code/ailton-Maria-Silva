import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import { Container } from './Style';
import { CreateTripInput } from './Style';
import { SelectTrip } from './Style';
import {ContainerBotao} from './Style';

function ApplicationForm () {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    };

    const [tripsList, setTripsList] = useState ([]);
    const [form, setForm] = useState({
        name:"",
        age: 0,
        applicationText:"",
        profession:"",
        country: "",
        trip: null
    });

    const getInputInfo = (e) => {
        const value = e.target.value;
        const inptName = e.target.name;
        setForm ({...form, [inptName]: value})
    };
    useEffect (()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips')
            .then((response)=>{
                setTripsList(response.data.trips)
                console.log(response.data.trips)
            }).catch((error)=>{
                console.log(error)
            })
    },[]);

    const submitApplication = (e) =>{
        e.defaultPrevented()
        const body ={
            name: form.name,
            age: form.age,
            applicationText:form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips/${form.trip.id}/apply`, body)
    }

    return(
        <Container>
            <div>
                <h2>INSCREVA-SE PARA UMA VIAGEM</h2>
            </div>
            <form onSubmit={submitApplication}>
                <div>
                    <SelectTrip 
                        name={"trip"}
                        value={form["trip"]}
                        type="option"
                        placeholder="Escolha uma viagem">
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
                        name={"name"}
                        value={form['name']}
                        type="text" 
                        placeholder="Nome Completo"
                        onChange={getInputInfo}
                        //required
                        //type="text"
                        />
                    <CreateTripInput 
                        name={"age"}
                        value={form['age']}
                        type="number"
                        placehoder="Idade"
                        onChange={getInputInfo}
                        //required
                        //pattern={"a-z"}
                        //title={"O viajante deve ser maior de 18"}
                        />
                    <CreateTripInput 
                        name={"application"}
                        value={form['application']}
                        type="text" 
                        placehoder="Texto de Candidatura"
                        onChange={getInputInfo}/>
                    <CreateTripInput 
                        name={"profession"}
                        value={form['profession']}
                        type="text" 
                        placeholder="Profissão"
                        onChange={getInputInfo}/>
                    <SelectTrip 
                        name={"country"}
                        value={form['country']}
                        type="text" 
                        placeholder="Escolha um país"
                        onChange={getInputInfo}> 
                        <option>Escolha um País</option>
                        <option> Argentina </option>
                        <option> Bolivia </option>
                        <option> Brasil</option>
                        <option> Chile </option>
                        <option> Colombia </option>
                        <option> Costa Rica </option>
                        <option> Cuba </option>
                        <option> Equador </option>
                        <option> Paraguai </option>
                        <option> Peru </option>
                        <option> Uruguai </option>
                        </SelectTrip>
                        <ContainerBotao>
                            <button type={"submit"}> ENVIAR </button>
                        </ContainerBotao>
                </div>
            </form>
            <ContainerBotao>
                <button onClick={goBack}> VOLTAR </button>
            </ContainerBotao>
        </Container>
    )
};

export default ApplicationForm;
