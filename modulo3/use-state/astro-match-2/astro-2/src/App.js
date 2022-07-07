import React, {useState} from 'react';
import CardUsuarios from './Componentes/CardMatch';
import ListaDeMatchs from './Componentes/Lista';
import styled from 'styled-components';


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

  const changePage = (currentPage) =>{
    setCurrentPage(currentPage)
  }

  return (
    <ContainerMedio>          
    <HeaderMatch>
      <button onClick={()=>changePage("cardMatch")}>astromatch</button>
      <button onClick={()=>changePage("listaMatch")}> <img src="https://img.icons8.com/nolan/64/speech-bubble.png"/> </button> 
    </HeaderMatch>
    {renderPage()}
  </ContainerMedio>
  );
}

export default App;


/*    

  useEffect(()=>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person')
    .then((response)=>{
      setChangeMatches(response.data.results);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);


*/