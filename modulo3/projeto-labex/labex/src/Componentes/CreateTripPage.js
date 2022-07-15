import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import { Container } from './Style';
import { CreateTripInput } from './Style';
import {ContainerBotao} from './Style'
import axios from 'axios';


function CreateTrip () {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    const [form, setForm] =({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    });    
    const getInputInfo = (e) => {
        const value = e.target.value;
        const inptName = e.target.name;
        setForm ({...form, [inptName]: value})
    };
    const submitTrip = (e) =>{
        e.defaultPrevented()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/trips`, body)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
    },[])

     return(
        <Container>
            <div>
                <h2>CRIE UMA VIAGEM</h2>
            </div>
            <form onSubmit={submitTrip}>
                <div>
                    <CreateTripInput 
                    name={"name"}
                    value={form["name"]}
                    type="text" 
                    placeholder="Nome da Viagem"
                    onchange={getInputInfo} />
                    <CreateTripInput 
                    name={"planet"}
                    value={form["planet"]}
                    type=""
                    placeholder="Planeta de Destino"
                    onchange={getInputInfo}  />
                    <CreateTripInput 
                    name={"date"}
                    value={form["date"]}
                    type="date" 
                    placeholder="dd/mm/aaaa"
                    onchange={getInputInfo}  />
                    <CreateTripInput 
                    name={"description"}
                    value={form["description"]}
                    type="text" 
                    placeholder="Descrição"
                    onchange={getInputInfo}  />
                    <CreateTripInput 
                    name={"durationInDays"}
                    value={form["durationInDays"]}
                    type="number" 
                    placeholder="Duração em dias"
                    onchange={getInputInfo}  />
                </div>
                <ContainerBotao>
                    <button type={"submit"}>Criar</button>
                </ContainerBotao>
            </form>
            <ContainerBotao>
                <button onClick={goBack}>Voltar</button>
            </ContainerBotao>
        </Container>
    )
};

export default CreateTrip;