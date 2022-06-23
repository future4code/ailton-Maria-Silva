import React from 'react';
//import axios from 'axios';
//import styled from 'styled-components'

class AdicionaMusicas extends React.Component{

    state = {
        musicaUsuario: "",
    }

    render (){
        return(
            <div>
                <h2> Adicione Músicas </h2>
                <div>
                    <label>Nome da Música:</label>
                    <input >
                    </input>
                    <label>Nome do artista/banda:</label>
                    <input >
                    </input>
                    <label>Link da Música:</label>
                    <input >
                    </input>
                    <button>Adicionar</button>
                </div>
            </div>
        );
    }
};
export default AdicionaMusicas;