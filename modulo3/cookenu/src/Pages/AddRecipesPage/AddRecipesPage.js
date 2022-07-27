import React from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import { BigContainer, PrettyInput, PrettyForm, PrettyButton } from "./Styled"
import { createRecipe } from "../../Services/recipe"

const AddRecipes = () =>{
    useProtectedPage()
    const [form, onChange, clear] = useForm({
        title: "",
        description: "",
        image: "",
    })
   
    const onSubmitForm = (e) =>{
        e.preventDefault()
        createRecipe(form, clear)
    }
    return(
        <BigContainer onSubmit={onSubmitForm}>
            <h2>ADICIONAR NOVA RECEITA</h2>
            <div>
                <PrettyForm on>
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
                    <PrettyButton>ADICIONAR</PrettyButton>
                </div>
                </PrettyForm>
            </div>
        </BigContainer>
    );
};

export default AddRecipes;