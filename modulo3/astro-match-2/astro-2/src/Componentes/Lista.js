import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const ContainerLista = styled.div`
    border: 2px solid gray;
    align-items: center;
    margin: 8%;
    padding: 15%;
    border-radius: 10px;
`

const ListaDeMatchs = () => {

    const [listaDeMatch, setListaDeMatch] = useState([])

    useEffect(()=>{
        pegarUsuarios()
    },[listaDeMatch])

    const pegarUsuarios = () =>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/matches`)
        .then((response)=>{
            setListaDeMatch(response.data.matches)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const clearList=()=>{
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/clear`)
        .then((response)=>{
            console.log(response)
            alert("Se livrou heim!")
        }).catch((error)=>{
            console.log(error);
        });
    }

    return(

        <ContainerLista>
            {listaDeMatch.map((usuario)=>{
                return(
                    <div key={usuario.id}>
                        <img height="70px" width="70px" src={usuario.photo} alt={usuario.photo_alt}/>
                        <span>{usuario.name}</span>
                    </div>
                )
            })}
            <button onClick={clearList} ><img src="https://img.icons8.com/nolan/30/trash.png"/></button> 
        </ContainerLista>
    )
}

export default ListaDeMatchs;