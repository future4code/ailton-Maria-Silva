import axios from 'axios';
import React from 'react';
//import styled from 'styled-components'

class DetalhesPlaylist extends React.Component {

    state = {
        detalhesPlay: {},
        musicas:""
    }

    componentDidMount(){
        this.pegarDetalhes()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.detalhesPlay !== prevState.detalhesPlay)
        this.pegarMusica()
    }

    pegarDetalhes = () => {
        const urlPlay = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?${this.props.playlists}`
        axios.get(this.detalhesPlay, urlPlay,{
            headers: {
                Authorization: "maria-silva-ailton"
            }
        }).then((response) => this.setState({detalhesPlay: response.data}))
        .catch((error) => console.log(error.response))

    }

    pegarMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
        axios.get(this.state.detalhesPlay.tracks)
        .then((response) => this.setState({musicas: response.data.name}))
        .catch((error) => console.log(error.response))
    }

    render(){
        return(
            <div>
                <h2>Pesquise sua música</h2>

                <div>
                    <label>Procure aqui:</label>
                    <input></input>
                    <button>Pesquisar</button>

                </div>
            </div>
        )
    }
}

export default DetalhesPlaylist;
