import React from 'react';
import axios from 'axios';
import styled from './styled'

class ListaPersonagem extends React.Components {

    state = {
        listaDePersonagens: []
    }



    componentDidMount(){
        this. pegarListaPersonagens()
    }

    pegarListaPersonagens = () =>{
        axios.get(`https://swapi.py4e.com/api/people`)
        .then((response) => this.setState({listaDePersonagens: response.data.results})
        ).catch((error)=> console.log(error.response))
    }


    render(){

        const personagens = this.state.listaDePersonagens.map((personagem)=>{
            return (
                <CardPersonagens 
                key={personagem.url}
                onClickLista={() => this.props.paginaDetalhesPersonagem(personagem.url)}
                >{personagem.name}</CardPersonagens>
            )
        })
        return(
            <div>
                <h1>Lista</h1>
                <div>
                    {personagens}
                </div>
            </div>
        )
    }
}

export default ListaPersonagem;