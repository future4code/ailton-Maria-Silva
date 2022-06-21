import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CadastroUsuario from './Componentes/CadastroUsuario'

const Container = styled.div`
display: flex;
flex-direction: center;
align-items:center;
border: 4px black solid;
`

class App extends React.Component {
  state ={

  }


  

  render() {

    const imprimeUsuariosNaTela = this.state.listaDeUsuarios?.list.map((usuario) =>{
      return 

          <div>
            <p key={usuario.id}> {usuario.nome} </p>
            <p key={usuario.id}> {usuario.email} </p>
          </div>
        this.listaDeUsuarios
    });

    return (
      <Container>
        <div>
          <button onClick={}>Cadastro Usuario</button>

          <button onClick={} >Lista de Usuario</button>
        </div>

        <CadastroUsuario />

      </Container>
    );
  }
}

export default App;
