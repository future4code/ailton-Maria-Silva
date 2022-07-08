import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styled from 'styled-components';

const BotaoContainer = styled.div`
    align-items: center;
    display:flex;
    justify-content:space-evenly;
    >button{
        cursor:pointer;
        border: none;
    }
`

const ContainerMatch = styled.div`
    width: 350px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${(props)=>props.foto});
    color: white;
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-right: 6%;
    margin-left: 6%;
    border-radius: 10px;
`

const EscolherPerfis = () => {

    const [perfis, setPerfis] = useState ([]);

    useEffect(()=>{
        changeMatchs()
    }, [])


    const changeMatchs = () =>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/person`)
        .then((response)=>{
            setPerfis(response.data.profile);
        }).catch((error)=>{
            alert(error.response.message);
        });
    };

    const selectMatch = () =>{
        const body = {
            id: perfis.id,
            choice: true,
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-caroline/choose-person`, body)
        .then((response)=>{
            changeMatchs();
            if(response.data.isMatch){
                alert("Deu match!!!")
            }else{
                alert("Não foi esse, tente novamente.")
            }
        }).catch((error)=>{
            console.log(error)
        })

    }

    return(

        <div>
            <div>
                <ContainerMatch key={perfis.id} foto={perfis.photo}>
                    <div>
                        <h3>{perfis.name}, {perfis.age}</h3>
                    </div>
                    <div>
                        <p>{perfis.bio}</p>
                    </div>
                </ContainerMatch>
            </div>
            <BotaoContainer>
                <button onClick={changeMatchs}><img src="https://img.icons8.com/nolan/64/heart-upside-down.png"/></button>
                <button onClick={selectMatch}><img src="https://img.icons8.com/nolan/64/like.png"/></button>
            </BotaoContainer>
        </div>
    )
}

export default EscolherPerfis;