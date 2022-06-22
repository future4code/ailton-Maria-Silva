import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CadastroUsuario from './Componentes/CadastroUsuario';
import TelaListaUsuarios from './Componentes/TelaListaUsuarios';


const Container = styled.div`
display:block;
margin-right: 35%;
margin-left:35%;
margin-top:8%;
justify-content:space-evenly;
`




class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <CadastroUsuario irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />
      default:
        return <div> Erro! Página não encontrada:</div>
    }
  };

  irParaCadastro = () => {
    this.setState ({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState ({telaAtual: "lista"})
  }
  render() {

    return (
      <Container>
        {this.escolheTela()}
      </Container>
    )
  } 
};

export default App;
