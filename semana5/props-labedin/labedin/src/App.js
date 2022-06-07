import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

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
  text-align: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <ContainerDoApp>
      <ContainerPaginaDaSessao>
        <EstiloSessa2>Dados pessoais</EstiloSessa2>
        <CardGrande 
          imagem="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/267325354_5249802238382258_5605791858038347308_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2L5hfEGrH30AX-rRg5e&_nc_oc=AQkGHjiEq2GFAYZey4fOFmcEJCcGoK_CPodbFT-fOv1AHcBE-pAjElS0NiPzxuFf6fs&_nc_ht=scontent-gru2-2.xx&oh=00_AT8gJRumAq1tCPgYNUg5r5Su30gbt4JzSZLeRWdtM_Mi8Q&oe=62A439F4" 
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
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
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
