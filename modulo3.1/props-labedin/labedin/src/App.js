import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
import carolepetite from './img/carolepetite.jpg';
import calipso from './img/Calipsomoda.png';

const ContainerDoApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const ContainerPaginaDaSessao = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const EstiloSessa2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <ContainerDoApp>
      <ContainerPaginaDaSessao>
        <EstiloSessa2>Dados pessoais</EstiloSessa2>
        <CardGrande 
          imagem= {carolepetite}
          nome="Maria Caroline" 
          descricao="Oi, sou a Carol, formada em Design de Moda, trabalhei 10 anos na área e estou em transição de carreira. Também sou mãe da neném Helena, e dos gatinhos Bruce e Petite."
        />
        
        <ImagemButton 
          imagem="data:image/png;base64,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" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/4213/4213922.png" 
          label= "E-mail:"
          labeled="mariacaroline@gmail.com" />

        <CardPequeno 
          imagem="https://i.pinimg.com/564x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg" 
          label= "Endereço:"
          labeled="Rua Clara Nunes, Ubatuba - São Paulo" />

      </ContainerPaginaDaSessao>

      <ContainerPaginaDaSessao>
        <EstiloSessa2>Experiências profissionais</EstiloSessa2>
        <CardGrande 
          imagem= {calipso} 
          nome="Calipso Moda Praia" 
          descricao="Designer, modelista, modelo e costureira." 
        />
        
        <CardGrande 
          imagem="https://mir-s3-cdn-cf.behance.net/projects/404/f87bcb106475961.Y3JvcCwxMjc4LDEwMDAsNjAsMA.jpg" 
          nome="Forever 21" 
          descricao="Apontando defeitos nas vitrines." 
        />
      </ContainerPaginaDaSessao>

      <ContainerPaginaDaSessao>
        <EstiloSessa2>Minhas redes sociais</EstiloSessa2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerPaginaDaSessao>
    </ContainerDoApp>
  );
}

export default App;
