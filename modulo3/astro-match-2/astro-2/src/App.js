import React, {useState} from 'react';
import ListaDeMatchs from './Componentes/Lista';
import EscolherPerfis from './Componentes/EscolherPerfis';
import styled from 'styled-components';


const ContainerMedio = styled.div`
background-color: pink;
margin-top: 5%;
margin-left: 38%;
margin-right: 38%;
width: 400px;
height: 600px;
border: 4px solid black;
border-radius: 5px;
background-color: white;
align-items: center;
`
const HeaderMatch = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
padding: 8%;
`

function App() {

  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "cardMatch"){
      return <EscolherPerfis/>
    } else if (currentPage === "listaMatch"){
      return <ListaDeMatchs />
    }
  }

  const changePage = (currentPage) =>{
    setCurrentPage(currentPage)
  }

  return (
    <div>
      <ContainerMedio>          
        <HeaderMatch>
          <button onClick={()=>changePage("cardMatch")}><img src="https://img.icons8.com/nolan/30/rocket.png"/></button>
          <button onClick={()=>changePage("listaMatch")}> <img src="https://img.icons8.com/nolan/30/communication.png"/> </button> 
        </HeaderMatch>
        {renderPage()}
      </ContainerMedio>
    </div>

  );
}

export default App;
