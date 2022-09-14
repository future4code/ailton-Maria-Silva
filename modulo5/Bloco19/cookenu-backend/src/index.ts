import { app } from "./app";
import {signup} from "../src/endpoints/signup";
import {login} from "../src/endpoints/login";


app.post("/signup", signup) //cadastrar

app.post("/login", login ) //login

//app.get("/user/profile", getUser) //pegar próprio perfil, a partir do token

// app.get("/user/:id", ) // seguir outro usuário a partir do id

//app.post("/recipe", ) //postar receita

//app.get("/recipe/:id", ) //ver receitas