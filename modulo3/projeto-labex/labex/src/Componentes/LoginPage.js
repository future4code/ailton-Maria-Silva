import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    //border: 2px solid whitesmoke;
    //background-color: black;
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 64vw;
    height: 84vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`

function LoginPage () {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (e) => {
        setEmail(e.target.value);
    };
    const getPassword = (e) => {
        setPassword(e.target.value)
    };

    const goBack = () =>{
        navigate('/')
    };

    const getInAdm = () => {
        const body = {
            email: email,
            password: password,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-caroline-ailton/login', body)
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
            <div>
                <p>
                    <input type="email" placeholder="E-mail" onChange={getEmail}/>
                </p>
                <p>
                    <input type="password" placeholder="Senha" onChange={getPassword}/>
                </p>
            </div>
            <div>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={getInAdm}>ENTRAR</button>
            </div>
        </Container>
    )
};

export default LoginPage;



/*  

const getInAdm = () =>{
        navigate("/admin-home-page")
    };



 */