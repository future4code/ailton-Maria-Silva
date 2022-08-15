import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CardPlaylist = styled.div`
border: none;
border-bottom: 1px solid gray;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

class VisualizarPlaylist extends React.Component{

    state ={
        listaDePlaylistUsuario:[]
    }

    componentDidMount(){
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const urlMostraPlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string`
        axios.get(urlMostraPlaylist,{
            headers: {
                Authorization: "maria-silva-ailton"
            }
        }).then((response)=>{
            this.setState.apply({listaDePlaylistUsuario: response.data})
        }).catch((error)=>{
            alert("Ocorreu um problema, tente novamente")
        })
    };

    render() {

        const listaPlaylists = this.state.listaDePlaylistUsuario.listaDePlaylistUsuario.map((lista) =>{
            return (
            <CardPlaylist>
                <p key={lista.id}> {lista.name} </p>
            </CardPlaylist>
            )
        })

        return(
            <div>
                <h2> Playlists Criadas </h2>
                <div>
                    {listaPlaylists}
                </div>              
            </div>
        );
    }

};
export default VisualizarPlaylist;