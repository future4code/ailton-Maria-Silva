import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProduct } from "./endpoints/createProducts";
import { getProduct } from "./endpoints/getAllProducts"

app.post("/users", createUser)
app.get("/users", getAllUsers)

app.post("/products", createProduct)
app.get("/products", getProduct)

//app.post("/purchases", createPurchases)
//app.get("/users/:user_id/purchases", getPurchaseById)