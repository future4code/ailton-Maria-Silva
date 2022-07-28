import React, { useState } from "react";
import {PrettyInput, PrettyButton, PrettyForm, LoadingImg} from "./Styled";
import useForm from "../../Hooks/useForm";
import {signUp} from "../../Services/user";
import {useNavigate} from "react-router-dom";


const SignUpForm = ({setLogButton}) =>{
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({name: "", email: "", passowrd: ""});
    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (e) =>{
        e.preventDefault()
        signUp(form, clear, navigate, setLogButton, setIsLoading)
    };
    return(
        <PrettyForm onSubmit={onSubmitForm}>
            <PrettyInput
            name={"name"}
            value={form.name}
            placeholder="Nome"
            onChange={onChange}
            required
            type={"name"}
            />
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
            type={"password"}
            />
            <PrettyButton type={"submit"}>
                {isLoading ? <LoadingImg src="https://www.avenidacenter.com.br/img/loading.gif"/> : <>Cadastrar</>}
            </PrettyButton>

        </PrettyForm>
    );
};
export default SignUpForm;