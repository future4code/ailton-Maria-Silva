import axios from 'axios';
import React, {useEffect, useState} from 'react';

const ListaDeMatchs = () => {

    const [listaDeMatch, setListaDeMatch] = useState([])

    useEffect(()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/matches`)
        .then((response)=>{
            setListaDeMatch(response.data.results);
        }).catch((error)=>{
            console.log(error);
        });
    },[])

    const clearList=()=>{
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error);
        });
    }

    return(

        <div>

            <h2> Lista de Matchs </h2>
            {listaDeMatch.map((usuario)=>{
                return(
                    <div>
                        <p>{usuario.name}</p>
                    </div>    

                )
            })}
            <button onClicl={clearList} ><img src="https://img.icons8.com/nolan/64/trash.png"/></button> 

        </div>
    )
}

export default ListaDeMatchs;