import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './Componentes/CriarPlaylist';
import VisualizarPlaylist from './Componentes/VisualizarPlaylist';
import AdicionaMusicas from './Componentes/AdicionaMusicas';
import DetalhesDaPlaylist from './Componentes/DetalhesDaPlaylist';


const Container = styled.div`
display: flex;
flex-direction: center;
align-items: center;
border: 4px solid black;
display: block;
margin-right: 35%;
margin-left: 35%;
justify-content: space-evenly;

`
function App() {
  
  return (
    <Container>
        <CriarPlaylist />
        <VisualizarPlaylist />
        <AdicionaMusicas/>
        <DetalhesDaPlaylist />
    </Container>
  )
};

export default App;
