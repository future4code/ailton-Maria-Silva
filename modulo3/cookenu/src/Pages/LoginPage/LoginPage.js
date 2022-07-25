import React from "react";
import { ScreenContainer } from "./Styled"
import useForm from "../Hooks/useForm"

// fazer o styled pros inputs

const Login = () =>{
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const onSubmitForm = () =>{

    }
    return(
        <ScreenContainer>
            <img src="https://img.freepik.com/premium-vector/cooking-logo-with-burned-teflon-symbol_18099-687.jpg" alt="desenho frigideira com chamas"/>
            <h2>Login</h2>
            <form onSubmit={onSubmitForm}>
                <input
                name={"email"}
                value={form.email}
                placeholder="E-mail"
                onChange={onChange} />
                <input
                name={"password"}
                value={form.password}
                placeholder="Senha"
                onChange={onChange} />
                <button>
                    Enviar
                </button>
            </form>
        </ScreenContainer>
    );
};

export default Login;