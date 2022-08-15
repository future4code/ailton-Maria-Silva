import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardTrack = styled.div`
display: flex;
flex-direction:row;
display: inline-block;
align-items: center;
`

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
                <h4> Adicione Músicas </h4>
                <CardTrack>

                    <p>Nome da Música:</p>
                    <input placeholder={"Nome da música"}
                    value={this.state.nameInput}
                    onChange={this.adicionaNome} />

                    <p>Nome do artista/banda:</p>
                    <input placeholder={"Artista que performa"}
                    value={this.state.artistInput}
                    onChange={this.adicionaArtista} />

                    <p>Link da Música:</p>
                    <input placeholder={"Link da música"}
                    value={this.state.urlInput}
                    onChange={this.adicionaUrlMusica}  />
                    
                    <div><button onClick={this.recebeTrack}>Adicionar</button></div>
                    
                </CardTrack>
            </div>
        );
    }
};
export default AdicionaMusicas;