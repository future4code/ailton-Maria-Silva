import React from "react"
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`

const DivGrandona =styled.div`
max-width: 600px;
height: 98vh;
border: 4px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column;
`

const DivMedia = styled.div`
flex: 1 1 0%;
display: flex;
flex-direction: column;
-webkit-box-pack: end;
justify-content: flex-end;
padding: 20px;
`
const DivRecebeMensagem = styled.div`
display: flex;
`

const InputDeUsuario = styled.input`
width: 100px;
display: inline-block;
`

const InputDeMensagem = styled.input`
display: inline-block;
width:450px;
`

const BotaoEnviar = styled.button`
width: 50px;
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
        this.setState({ valorInputNomeUsuario: ""});
        this.setState({ valorInputMensagem: ""});
    };

    render() {
        const listaDeComponentes = this.state.usuarioBatePapo.map((usuario) =>{
            return (
                <p> {usuario.nome}: {usuario.mensagem} </p>
                );
            });

            return (
                <Container>
                    <DivGrandona>
                        <DivMedia>{listaDeComponentes}</DivMedia>
                        <DivRecebeMensagem>
                            <InputDeUsuario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputUsuario} placeholder = {"Usuário"}/> 
                            <InputDeMensagem value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} placeholder={"Mensagem"}/>
                            <BotaoEnviar onClick={this.adicionarMensagemUsuario}>Enviar</BotaoEnviar>
                        </DivRecebeMensagem>
                    </DivGrandona>
                </Container>
                );

            }

    }

    export default CorpoMensagem;