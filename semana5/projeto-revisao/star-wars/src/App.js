import React from 'react';
import DetalhePersonagem from './Pages/ListaDetalhesPersonagensPage/DetalhePersonagem';
import ListaPersonagem from './Pages/ListaPersonagensPage/ListaPersonagem';


class App extends React.Component {

  state = {
    telaAtual: "lista",
    clickUrl: "",
  }

  paginaDetalhesPersonagem = (url) =>{
    this.setState({telaAtual:"detalhe", clickUrl: url})
  }

  paginaLista = () =>{
    this.setState({telaAtual: "lista", clickUrl:""})
  }

  selecionaPagina = () => {
    switch (this.telaAtual){
      case "lista":
        return<ListaPersonagem detalhesPersonagem={this.paginaDetalhesPersonagem} />
      case "detalhe":
        return <DetalhePersonagem paginaLista={this.paginaLista} url={this.stateclickUrl}/>
      default:
        return <ListaPersonagem paginaLista={this.paginaLista}/>
    }
  }

  render(){
    return (
      <div className="App">
          <div> Star Wars </div>
          {this.selecionaPagina}
      </div>
    );
  }
}

export default App;
