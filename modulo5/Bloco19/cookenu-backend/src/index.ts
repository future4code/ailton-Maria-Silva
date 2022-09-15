import { app } from "./app";
//import {User} from "../src/model/User"
import {signup} from "../src/endpoints/signup";
import {login} from "../src/endpoints/login";
import { getUser } from "./endpoints/pegarUsuario";

//const user = new User
app.post("/signup", signup) //cadastrar

app.post("/login", login ) //login

app.get("/user/profile", getUser) //pegar próprio perfil, a partir do token

app.get("/user/:id", ) // seguir outro usuário a partir do id
// 5. **Seguir usuário**
// Um usuário deve poder seguir outros usuários. 
// Para isso, ele deve fornecer o id do usuário que deseja seguir. 
// Atente-se que essa funcionalidade se assemelha ao do 
// instagram: um usuário seguir outro, não significa que "esse outro" 
// está seguindo o primeiro.

app.post("/recipe", ) //postar receita
// 4. **Criar receitas**
// O usuário deve poder criar uma receita. A receita deve ter os seguintes
//  atributos: título, descrição/modo de preparo e data de criação

app.get("/recipe/:id", ) //ver receitas do usuario que ele segue
// 6. **Feed** 
// Um usuário deve poder visualizar as receitas criadas pelos usuários 
// que ele segue. As receitas devem estar ordenadas pela data de criação.

