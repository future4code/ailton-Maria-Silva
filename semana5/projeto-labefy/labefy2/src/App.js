import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './Componentes/CriarPlaylist';
import VisualizarPlaylist from './Componentes/VizualizarPlaylist';
import DetalhesDaPlaylist from './Componentes/DetalhesDaPlaylist';

const Cabecalho = styled.header`
background-color: gray;
color: greenyellow;
margin-right: 15%;
margin-left: 15%;
padding-left:30%;
padding-right:30%;
display: flex;
flex-direction: center;
align-items: center;
border: 4px solid gray;
text-align:center;
`

const Container = styled.div`
display: flex;
flex-direction: center;
align-items: center;
border: 4px solid gray;
display: block;
margin-right: 15%;
margin-left: 15%;
padding-left:25%;
padding-right:25%;
justify-content: space-evenly;
background-color: black;
color: white;
text-align:center;
`


function App() {

  return (
    <div>
      <Cabecalho> 
        <h1>LABEFY</h1> 
      </Cabecalho>
      <Container>
          <CriarPlaylist />
          <VisualizarPlaylist />
          <DetalhesDaPlaylist />
      </Container>
    </div>  
  )
};

export default App;
