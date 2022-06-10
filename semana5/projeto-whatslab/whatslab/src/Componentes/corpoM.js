import React from "react"
import styled from "styled-components";

const Container = styled.div`
max-width: 600px;
height: 100vh;
border: 4px solid fuchsia;
flex: 1 1 0%;
display: flex;
`

const DivGrandona =styled.div`
display:flex;
justify-content:center;
box-sizing: border-box;
`

const DivMedia = styled.div`
max-width: 600px;
height: 100vh;
border: 4px solid fuchsia;
flex: 1 1 0%;
display: flex;
`
const DivRecebeMensagem = styled.div`
flex: 1 1 0%;
display: flex;
flex-direction: column;
-webkit-box-pack: end;
justify-content: flex-end;
padding: 25px;
`


class CorpoMensagem extends React.Component {
    state = {
        usuarioBatePapo:[{

        }],
    valorInputNomeUsuario: "",
    valorInputMensagem: ""

    };

    onChangeInputUsuario = (event) => {
        this.setState ({ valorInputNomeUsuario: event.target.value});
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value});
    };

    adicionarMensagemUsuario = () => {
        const novoUsuario = {
            nome: this.state.valorInputNomeUsuario, mensagem: this.state.valorInputMensagem
        };

        const novosUsuarios = [...this.state.usuarioBatePapo, novoUsuario];
        this.setState({usuarioBatePapo: novosUsuarios}); 
        this.setState({ novosUsuarios: ""});
    };

    render() {
        const listaDeComponentes = this.state.usuarioBatePapo.map((usuario) =>{
            return (
                <p> {usuario.nome} {usuario.mensagem} </p>
                );
            });

            return (
                <DivGrandona>
                    <DivMedia>
                    <div>{listaDeComponentes}</div>
                    <DivRecebeMensagem>
                        <input value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputUsuario} placeholder = {"Nome"}/> 
                        <input value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} placeholder={"Mensagem"}/>
                        <button onClick={this.adicionarMensagemUsuario}>Enviar</button>
                    </DivRecebeMensagem>
                    </DivMedia>
                </DivGrandona>
                );

            }

    }

export default CorpoMensagem;