import './App.css';
import React, { Component } from 'react';
import PrimeiraEtapa from './Componentes/PrimeiraEtapa';
import SegundaEtapa from './Componentes/SegundaEtapa';
import TerceiraEtapa from './Componentes/TerceiraEtapa';
import QuartaEtapa from './Componentes/QuartaEtapa';
import styled from 'styled-components';

const Container = styled.div`
display:block;
margin-right: 25%;
margin-left:25%;
text-align:center;
`

//function App() {

  class App extends Component {

    state = {
      etapa: 1
    };

    renderizaEtapa = () => {
      switch (this.state.etapa){
        case 1:
          return <PrimeiraEtapa />;
        case 2:
          return <SegundaEtapa />;
        case 3:
          return <TerceiraEtapa />;
        case 4:
          return <QuartaEtapa />;    
      }
    }

    proximaEtapa = () => {
      this.setState({etapa: this.state.etapa + 1 })
    }

    render(){
      return(
        <Container>
          <div>{this.renderizaEtapa()}</div>
          <div>
            {this.state.etapa === 4 || <button onClick={this.proximaEtapa}> Próxima etapa </button>}
          </div>
        </Container>        
      );
    }
  };

//}
export default App;
