import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from './Style';
import { CreateTripInput } from './Style';

function LoginPage () {
    const navigate = useNavigate();

    const [form, setForm] = useState({email:"", password:""})

    const getEmail = (e) => {
        setForm({email: e.target.value});
    };
    const getPassword = (e) => {
        setForm({password: e.target.value})
    };

    const goBack = () =>{
        navigate('/')
    };

    const getInAdm = (e) => {
        e.preventDefault()
        //const body = {
        //    email: email,
        //    password: password,
        //}
        //axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline-ailton/login', body)
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
                    value={form.email} 
                    placeholder="E-mail" 
                    onChange={getEmail}
                    required
                    type="email"
                    />
                <CreateTripInput 
                    value={form.password}
                    type="password" 
                    placeholder="Senha" 
                    onChange={getPassword}
                    required
                    pattern={"^.{8,}"}
                    title={"Sua senha deve ter no mínimo 8 caracteres"}/>
            </div>
            <div>
                <button>ENTRAR</button>
            </div>
            </form>
            <div>
                <button onClick={goBack}>VOLTAR</button>
            </div>

        </Container>
    )
};

export default LoginPage;