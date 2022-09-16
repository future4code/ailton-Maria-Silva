import { app } from "./app";
import {signup} from "../src/endpoints/signup";
import {login} from "../src/endpoints/login";
import { getUser } from "./endpoints/pegarUsuario";
import {followUser} from "./endpoints/seguirUsuario";
import {postarReceita} from "./endpoints/postarReceita";
import{getRecipeFromUser} from "./endpoints/pegarReceita";

app.post("/signup", signup) 

app.post("/login", login ) 

app.get("/user/profile", getUser) 

app.get("/user/:id", followUser) 

app.post("/recipe", postarReceita) 

app.get("/recipe/:id", getRecipeFromUser) 


