import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'react';

const PokeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid yellow;
    border-radius: 15px;
    >p{
        text-align: center;
    }
`


function PokeCard (props) {

    const [pokemon, setPokemon] = useState({});

    pegaPokemon = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response =>{
            setPokemon({ pokemon: response.data });
        }).catch(error =>{
            console.log(error);
        });
    };

    return(

        <PokeContainer>
            <div>
                <p>{pokemon.name}</p>
                <p>{pokemon.weight} Kg</p>
                {pokemon.types && <p>{pokemons.types[0].type.name}</p>}
                {pokemon.sprites && (
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
            </div> 
        </PokeContainer>
    )
};


export default PokeCard;

