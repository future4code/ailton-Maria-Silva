import React from 'react';
import styled from 'styled-components'

const PequenoContainerCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`;

const ImagemCardPequeno = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: white;
`;


function CardPequeno(props) {
    return (
        <PequenoContainerCard>
            <ImagemCardPequeno src={ props.imagem } />
        <div>
            <b> { props.label } </b><text> { props.labeled }</text>
        </div>

        </PequenoContainerCard>
    )
}

export default CardPequeno