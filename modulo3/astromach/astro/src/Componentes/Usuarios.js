import axios from 'axios';
import React from 'react';

const CardUsuarios = () => {

    const perfilUsuarios = () =>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maria-caroline/person`)
        .then((response)=>{
            console.log(response);
            setImmediate(response.data.id);
        }).catch((error) =>console.log(error));
    };

    const escolhePerfil = (idProfile) => {
        const body = {
            id: idProfile,
            choice: true,
        };
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maria-caroline/choose-person`, body,{
            
        }).then((response)=>{
            console.log(response);
        }).catch((erros)=>{
            console.log(erros.data)
        });
    };

    return(

        <div>

            <h2> Usuários </h2>

            <button>D</button>
            <button>L</button>

        </div>
    )
}

export default CardUsuarios;