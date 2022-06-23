import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardUsuario = styled.div`
    display: flex;
    border: none;
    border-bottom: 1px solid gray;
    padding: 10px;
    margin: 10px;
    width: 250px;
    justify-content: space-between;
`
const ContainerLista = styled.div`
flex-direction: column;
text-align:center;
border: 2px solid black;
width: 30vw;
height: 30vh;
justify-content:center;
`

const Botao = styled.button`
background-color:black;
color:white;
`

class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount(){
        this.pegarUsuarios()
    }

    pegarUsuarios = async() =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const response = await axios.get(url,{
                headers: {
                    Authorization: "maria-silva-ailton"
                }
            })
            this.setState({usuarios: response.data})
        }catch(error){
            alert("Ocorreu um erro tente novamente")            
        }
    }

    deletarUsuario = (id) => {
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
                headers: {
                    Authorization: "maria-silva-ailton"
                }
            }).then((response) =>{
                alert("Usuário deletado com sucesso!!!")
                this.pegarUsuarios()
            }).catch((error)=>{
                alert("Ocorreu um erro, tente novamente.")
            })
        }
    

    render(){

        const listaUsuarios = this.state.usuarios.map((usuario) =>{
            return (
            <CardUsuario key={usuario.id}>
                {usuario.name}
                <Botao onClick={() => this.deletarUsuario(usuario.id)}>Deletar</Botao>
            </CardUsuario>

            )

        })


        return(
            <div>
                <Botao onClick={this.props.irParaCadastro}>Cadastro</Botao>
                <ContainerLista>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
                </ContainerLista>
            </div>

        )
    }
}

export default TelaListaUsuarios;