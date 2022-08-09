import axios from 'axios';

export const pegarListaPersonagens = (saveData) =>{
    axios.get(`https://swapi.py4e.com/api/people`)
    .then((response) => saveData({listaDePersonagens: response.data.results})
    ).catch((error)=> console.log(error.response))
}

export const pegarPersonagens = (saveData) =>{
    axios.get(this.pegarPersonagens.url)
        .then((response)=> saveData({personagemStar: response.data}))
        .catch((error)=>console.log(error.response))
}

export const pegarPlaneta = () =>{
    axios.get(this.state.personagemStar.homeworld)
    .then((response)=> this.setState({planeta: response.data.name}))
    .catch((error) => console.log(error.response))
}