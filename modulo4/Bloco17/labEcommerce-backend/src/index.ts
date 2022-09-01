import { app } from "./app";

app.post("/users")
app.get("/users")

app.post("/products")
app.get("/products")

app.post("/purchases")
app.get("/users/:user_id/purchases")