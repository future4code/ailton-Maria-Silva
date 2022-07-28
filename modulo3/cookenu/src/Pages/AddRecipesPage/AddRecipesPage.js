import React, { useState } from "react";
//import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import { BigContainer, PrettyInput, PrettyForm, PrettyButton, LoadingImg } from "./Styled"
import { createRecipe } from "../../Services/recipe";

const AddRecipes = () =>{
    //useProtectedPage()
    const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (e) =>{
        e.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }
    return(
        <BigContainer>
            <h2>ADICIONAR NOVA RECEITA</h2>
            <div>
                <PrettyForm onSubmit={onSubmitForm}>
                <PrettyInput
                name={"title"}
                value={form.title}
                onChange={onChange}
                placeholder="Título"
                required
                />
                <PrettyInput
                name={"description"}
                value={form.description}
                onChange={onChange}
                placeholder="Descrição"
                required
                />
                <PrettyInput
                name={"image"}
                value={form.image}
                onChange={onChange}
                placeholder="Link da Imagem"
                />
                <div>
                    <PrettyButton type={"submit"}>
                    {isLoading ? <LoadingImg src="https://www.avenidacenter.com.br/img/loading.gif"/> : <>ADICIONAR</>}
                    </PrettyButton>
                </div>
                </PrettyForm>
            </div>
        </BigContainer>
    );
};

export default AddRecipes;