import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import { CreateTripInput } from './Style';
import {ContainerBotao} from './Style'

function LoginPage () {
    const navigate = useNavigate();

    const [form, setForm] = useState({email:"", password:""})

    const onChangeEmailPassowrd = (e) =>{
        const {name, value} = e.target;
        setForm({...form, [name]:value})
    };

    const goBack = () =>{
        navigate('/')
    };
    const goAdmin = () =>{
        navigate('/admin-home-page')
    }

    const getInAdm = (e) => {
        e.preventDefault()
        const body = {
           email: form.email,
           password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline/login', body)
            .then((response) => {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('/admin-home-page')
            }).catch((error) => {
                console.log(error)
            })
    };

    return(
        <Container>
            <div>
                <h2>Login</h2>
            </div>
            <form onSubmit={getInAdm}>
            <div>
                <CreateTripInput 
                    name="email"
                    value={form["email"]} 
                    placeholder="E-mail" 
                    onChange={onChangeEmailPassowrd}
                    required
                    type="email"
                    />
                <CreateTripInput 
                    name="password"
                    value={form["password"]}
                    type="password" 
                    placeholder="Senha" 
                    onChange={onChangeEmailPassowrd}
                    required
                    pattern={"^.{8,}"}
                    title={"Sua senha deve ter no mínimo 8 caracteres"}/>
            </div>
            <ContainerBotao>
                <button onClick={goAdmin} type={"submit"}>ENTRAR</button>
            </ContainerBotao>
            </form>
            <ContainerBotao>
                <button onClick={goBack}>VOLTAR</button>
            </ContainerBotao>

        </Container>
    )
};

export default LoginPage;


/*


    const getEmail = (e) => {
        setForm({...form, email: e.target.value});
    };
    const getPassword = (e) => {
        setForm({...form, password: e.target.value})
    }; 
    
*/
