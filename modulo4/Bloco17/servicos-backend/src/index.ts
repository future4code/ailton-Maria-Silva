import { app } from "./app";
import { criarEndereco } from "./endpoints/criarEndereço";

app.post("/cadastro-cep/:cep", criarEndereco)