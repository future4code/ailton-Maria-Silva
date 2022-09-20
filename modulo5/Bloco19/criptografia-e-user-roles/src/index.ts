import { app } from "./app";
import {UserEndpoint} from "../src/endpoints/User"

const user = new UserEndpoint

app.post("/user/signup", user.createUser)

app.post("/user/login", user.login)

app.get("/user/profile", user.getUser)