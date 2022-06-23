import React from 'react';
//import axios from 'axios';
//import styled from 'styled-components'

class DetalhesPlaylist extends React.Component {

    state = {
        mostraMúsica: ""
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