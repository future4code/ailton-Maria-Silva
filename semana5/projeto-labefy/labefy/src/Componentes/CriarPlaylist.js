import React from 'react';
import axios from 'axios';
//import styled from 'styled-components'

class CriarPlaylist extends React.Component{

    state = {
        playlists: "",
    }

    onChangePlaylist = (e) => {
        this.setState({playlists: e.target.value})
    }

    onClickPlaylist = () => {
        const ulrPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const bodyPlaylist = {
            name: this.state.playlists
        }
        axios.post(ulrPlaylist, bodyPlaylist,{
            headers:{
                Authorization: "maria-silva-ailton"
            }
        }).then((response)=>{
            alert("Playlist criada com sucesso!!!")
            this.setState({name:""})
        }).catch((error)=>{
            alert(error.data.message)

        })
      }


    render (){

        return(
            <div>
                <h2>Crie uma playlist!</h2>
                <div>
                    <label>Crie uma Playlist:</label>
                    <input placeholder={"Playlist"}
                    value={this.state.playlists}
                    onChange={this.onChangePlaylist} >
                    </input>
                    <button onClick={this.onClickPlaylist}>Adicionar</button>
                </div>
            </div>
        );
    }
};
export default CriarPlaylist;