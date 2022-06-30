import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AdicionaMusicas from './AdicionaMusica';

const CardPlaylist = styled.div`
border: none;
border-bottom: 1px solid gray;
padding: 10px;
margin: 10px;
width: 300px;
display: inline;
justify-content: space-between;
`
const BotaoPequeno = styled.button`
height: 25px;
width: 25px;
`

class VisualizarPlaylist extends React.Component{

    state ={
        listaUsuario:[]
    }

    componentDidMount(){
        this.pegarPlaylists()
    }

    pegarPlaylists = async() => {
        const urlMostraPlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

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
            <div>
                <CardPlaylist>
                    <h2 key={lista.id}> {lista.name} </h2>
                    <BotaoPequeno onClick={() =>this.deletarPlaylist(lista.id)}> x </BotaoPequeno>
                    <AdicionaMusicas/>
                </CardPlaylist>
                
            </div>
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