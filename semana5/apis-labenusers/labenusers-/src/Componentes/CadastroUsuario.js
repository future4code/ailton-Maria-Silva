import './App.css';
import axios from 'axios';
import styled from 'styled-components';



class CadastroUsuario extends React.Component {
    state = {
        listaDeUsuarios: [],
        nomeUsuarios: '',
        listaDeEmails: [],
        emailsUsuarios:'',
      }
    
      
      componentDidMount(){
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
          headers:{
            Authorization: "maria-silva-ailton"
          }
        }).then((response) => {
          this.setState({listaDeUsuarios: response.data.result})
        }).catch((error) =>{
          console.log(error)
        })
      }
    
      onChangeUsuarios = (event) => {
        this.setState({nomeUsuarios: event.target.value})
      }
    
      onCheangeEmails = (event) => {
        this.setState ({emailsUsuarios: event.target.value})
      }
    
      receberUsuario = () => {
        const body = {
          name: this.state.nomeUsuarios,
          email: this.state.emailsUsuarios
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers:{
            Authorizations: "maria-silva-ailton"
          }
        }).then((response) =>{
          console.log(response)
        }).catch((error) =>{
          console.log(error)
        })
    }

    render(){
        return(
            <div> 
                <input type={'text'} placeholder={'nome de usuario'} value={this.state.nomeUsuarios} onChange={this.onChangeUsuarios} />
                <input type={'email'} placeholder={'email de usuario'} value={this.state.emailsUsuarios} onChange={this.onChangeEmails}  />
                <button onClick={this.receberUsuario}> Criar Usuário</button>
            </div>    
        )
    }

};

export default CadastroUsuario;