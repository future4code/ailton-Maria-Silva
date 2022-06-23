import React, { Component }  from 'react';
//import styeld from 'styled-components';
/*
const Container1 = styled.div`
display:block;
`

const MiniContainer = styled.div`
text-align:center;
font-size:x-large;
`*/

class PrimeiraEtapa extends React.Component {
    render(){
        return(
            <div>
                <div nameClass="Titulo">
                    <h3> ETAPA 1 - DADOS GERAIS</h3>
                </div>
                <div nameClass="NomeUsuario">
                    <p> Qual seu nome? </p>
                    <input ></input>
                </div>
                <div nameClasse="IdadeUsuario">
                    <p> Qual sua idade? </p>
                    <input ></input>
                </div>
                <div nameClass="EmailUsuario">
                    <p>Qual seu e-mail?</p>
                    <input ></input>
                </div>
                <div nameClass="EscolaridadeUsuario"> 
                    <p> Qual sua idade?</p>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
                </div>
            </div>
        )
    }
};

export default PrimeiraEtapa;