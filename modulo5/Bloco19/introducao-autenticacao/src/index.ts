import { app } from "./app";
import { login, getUser } from "./endpoints/User";

app.post("/user/signup", login)

app.get("/user/profile", getUser)