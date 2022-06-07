import React from 'react';
import styled from 'styled-components'

const GrandeCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const ImagemGrandeCardContainer = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const TituloH4 = styled.h4 `
   margin-bottom: 15px;
`;

const DivisaoCardGrande = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`




function CardGrande(props) {
    return (
        <ImagemGrandeCardContainer>
            <ImagemGrandeCardContainer src={ props.imagem } />
            <DivisaoCardGrande>
                <TituloH4>{ props.nome }</TituloH4>
                <p>{ props.descricao }</p>
            </DivisaoCardGrande>
        </ImagemGrandeCardContainer>
    )
}

export default CardGrande;