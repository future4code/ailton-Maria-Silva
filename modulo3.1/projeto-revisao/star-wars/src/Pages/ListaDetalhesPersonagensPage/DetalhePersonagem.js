import React from 'react';

class DetalhePersonagem extends React.Components {

    state ={
        personagemStar: {},
        planeta: ""
    }

    componentDidMount(){
        this.pegarPersonagens()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.personagemStar !== prevState.personagemStar)
        this.pegarPlaneta()
    }

    pegarPersonagens = () =>{
        axios.get(this.pegarPersonagens.url)
            .then((response)=> this.setState({personagemStar: response.data}))
            .catch((error)=>console.log(error.response))
    }

    pegarPlaneta = () =>{
        axios.get(this.state.personagemStar.homeworld)
        .then((response)=> this.setState({planeta: response.data.name}))
        .catch((error) => console.log(error.response))
    }

    render(){
        return(
            <div>
                <h1>Detalhes</h1>
                <div>
                    {this.state.personagemStar.name && this.state.planeta ? (
                        <div>
                            <p>Nome:{this.state.personagemStar.name}</p>
                            <p>Planeta natal:{this.state.planeta}</p>

                        </div>
                    ) : <p> Carregando </p> }
                </div>
                <button onClick={this.props.paginaLista}>Voltar</button>
            </div>
        )
    }
}

export default DetalhePersonagem;