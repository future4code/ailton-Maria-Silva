import React, {useState} from 'react';
import styled from 'styled-components'
import CardUsuarios from './Componentes/Usuarios';
import ListaDeMatchs from './Componentes/ListaDeMatchs';
import TesteNaTela from './Componentes/TesteNaTela';

const ContainerMedio = styled.div`
margin-top: 5%;
margin-left: 38%;
margin-right: 38%;
width: 400px;
height: 600px;
border: 1px solid black;
border-radius: 5px;
background-color: white;
`
const HeaderMatch = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
padding: 8%;
`

function App() {
  
  const [currentPage, setCurrentPage] = useState("")

  const renderPage = () => {
    if (currentPage === "cardMatch"){
      return <CardUsuarios/>
    } else if (currentPage === "listaMatch"){
      return <ListaDeMatchs />
    }
  }

  changePage = (currentPage) =>{
    setCurrentPage(currentPage)
  }

  return (

      <ContainerMedio>          
        <HeaderMatch>
          <button onClick={()=>changePage("cardMatch")}>astromatch</button>
          <button onClick={()=>changePage("listaMatch")}> M </button> 
        </HeaderMatch>
        {renderPage}
        <TesteNaTela/>
      </ContainerMedio>
  );
}

export default App;
