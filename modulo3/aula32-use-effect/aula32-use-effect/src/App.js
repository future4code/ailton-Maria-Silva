import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import PokeCard from './Componentes/PokeCard/PokeCard';

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 25%;
border: 5px solid blue;
align-items: center;
>h1{
  text-align: center;
}
`


function App() {

  const [pokelist, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect (()=>{
    pegarPokemonNaAPI = () =>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then(response => {
        setPokelist({pokelist: response.data.results});
      })
      .catch(error =>{
        console.log(error);
      });
    };
    pegarPokemonNaAPI()
  }, [])




  changePokeName = (e) => {
    setPokeName({pokeName: e.target.value})
  }

  return (
    <Container>
      <header>
        <h1> POKEMONS </h1>
      </header>
      <select onChange={changePokeName}>
        <option value={""}> Nenhum </option>
        {pokelist.map(pokemon =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      <PokeCard />
    </Container>
  );
};

export default App;

