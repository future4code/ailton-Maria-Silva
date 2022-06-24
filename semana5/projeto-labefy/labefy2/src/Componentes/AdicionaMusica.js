import React from 'react';
import axios from 'axios';
//import styled from 'styled-components'

class AdicionaMusicas extends React.Component{

    state = {
        nameInput: "",
        artistInput:"",
        urlInput:""
    }

    adicionaNome = (e) => {
        this.setState({nameInput: e.target.value})
    }

    adicionaArtista = (e) => {
        this.setState({artistInput: e.target.value})
    }

    adicionaUrlMusica = (e) => {
        this.setState ({urlInput: e.target.value})
    }

    recebeTrack = () => {
        const urlCadastro = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.nameInput,
            artist: this.state.artistInput,
            url: this.state.urlInput
        }

        axios.post(urlCadastro, body,{
            headers: {
                Authorization: "maria-silva-ailton"
            }
        }).then((response) => {
            alert("Música adicionada com sucesso!!!")
            this.setState({name: "", artist:"", url:""})
        }).catch((error) =>{
            alert(error.response.data.message)
        })
    }

    render (){
        return(
            <div>
                <h2> Adicione Músicas </h2>
                <div>
                    <label>Nome da playlist:</label>
                    <option></option>

                    <label>Nome da Música:</label>
                    <input placeholder={"Nome da música"}
                    value={this.state.nameInput}
                    onChange={this.adicionaNome} />

                    <label>Nome do artista/banda:</label>
                    <input placeholder={"Artista que performa"}
                    value={this.state.artistInput}
                    onChange={this.adicionaArtista} />

                    <label>Link da Música:</label>
                    <input placeholder={"Link da música"}
                    value={this.state.urlInput}
                    onChange={this.adicionaUrlMusica}  />
                    
                    <button onClick={this.recebeTrack}>Adicionar</button>
                </div>
            </div>
        );
    }
};
export default AdicionaMusicas;