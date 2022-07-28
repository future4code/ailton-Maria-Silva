import React, { useState }from "react";
import {PrettyInput, PrettyButton, PrettyForm, LoadingImg} from "./Styled";
import useForm from "../../Hooks/useForm";
import {login} from "../../Services/user";
import {useNavigate} from "react-router-dom";

const LoginForm = ({setLogButton}) =>{
    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false);
    const onSubmitForm = (e) =>{
        e.preventDefault()
        login(form, clear, navigate, setLogButton, setIsLoading)
        navigate("/")
    };
    return(
            <PrettyForm onSubmit={onSubmitForm}>
                <PrettyInput
                name={"email"}
                value={form.email}
                placeholder="E-mail"
                onChange={onChange}
                required
                type={"email"}
                />
                <PrettyInput
                name={"password"}
                value={form.password}
                placeholder="Senha"
                onChange={onChange}
                required
                type={"password"} />
                <PrettyButton
                type={"submit"}>
                    {LoadingImg ? <img src="https://www.avenidacenter.com.br/img/loading.gif"/> : <>Enviar</>}
                </PrettyButton>
            </PrettyForm>
    );
};
export default LoginForm;