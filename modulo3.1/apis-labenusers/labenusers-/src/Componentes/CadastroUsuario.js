import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerUsuario = styled.div`
flex-direction: column;
text-align:center;
border: 2px solid black;
width: 30vw;
height: 30vh;
justify-content:center;
`
const DivisaoInput = styled.div`
display:block;
margin-bottom:30px;
`

const Botao = styled.button`
background-color:black;
color:white;
`

class CadastroUsuario extends React.Component {

  state = {
    nomeUsuarios: "",
    emailsUsuarios: "",
  }

  onChangeUsuarios = (event) => {
    this.setState({nomeUsuarios: event.target.value})
  };

  onChangeEmails = (event) => {
    this.setState ({emailsUsuarios: event.target.value})
  };

      
  receberUsuario = () => {
    const body = {
      name: this.state.nomeUsuarios,
      email: this.state.emailsUsuarios
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers:{
        Authorization: "maria-silva-ailton"
      }
    }).then((response) =>{
      alert("Usuário cadastrado com sucesso!!!")
      this.setState({nomeUsuarios: "", emailsUsuarios:""})
    }).catch((error) =>{
      alert(error.response.data.message)
      console.log(error)
    })
};

  render (){
    return(
    <div>
      <Botao onClick={this.props.irParaLista}>Lista de Usuários</Botao>
      <ContainerUsuario>
        <h2>Cadastro</h2>
        <DivisaoInput>
        <label>Nome:</label>
        <input type={'text'} 
        placeholder={'nome de usuario'} 
        value={this.state.nomeUsuarios} 
        onChange={this.onChangeUsuarios} />
        </DivisaoInput>
        <DivisaoInput>
        <label>E-mail:</label>
        <input type={'email'} 
        placeholder={'email de usuario'} 
        value={this.state.emailsUsuarios} 
        onChange={this.onChangeEmails}  />
        </DivisaoInput>

        <Botao onClick={this.receberUsuario}> Cadastrar </Botao>
      </ContainerUsuario>
    </div>
  )}
};

export default CadastroUsuario;