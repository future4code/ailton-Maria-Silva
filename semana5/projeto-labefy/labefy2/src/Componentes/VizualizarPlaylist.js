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
        listaUsuario:[]
    }

    componentDidMount(){
        this.pegarPlaylists()
    }

    pegarPlaylists = async() => {
        const urlMostraPlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string`

        try{
            const res = await axios.get(urlMostraPlaylist, {
                headers: {
                    Authorization: "maria-silva-ailton"
                }
            })
            this.setState({listaUsuario: res.data.result.list})
        } catch (error){
            alert ("Ocorreu um problema, tente novamente!")
        }
    };

    deletarPlaylist = (id) => {
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "maria-silva-ailton"
                }
            }).then((response) => {
                alert("Playlist deletada com sucesso!!!")
                this.pegarPlaylists()
            }).catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }

    render() {

        const listaPlaylists = this.state.listaUsuario.map((lista) => {
            return (
            <CardPlaylist>
                <p key={lista.id}> {lista.name} </p>
                <button onClick={() =>this.deletarPlaylist(lista.id)}> x </button>
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