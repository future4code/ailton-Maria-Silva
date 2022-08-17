import express from "express";
import cors from "cors";
import { Products, productsList } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Ex 1
// Crie uma nova API do zero (ou utilizando um template) e
// desenvolva um endpoint de teste com método GET no path “/test” que 
//retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/", (req, res) => {
    res.send("Mensagem genérica que a API está funcionando")
})

// Ex 3
//Desenvolva um endpoint que cria um novo produto e retorna a 
//lista de produtos atualizada. 
//A id do produto deve ser gerada automaticamente pela API.

app.post("/criar-produtos", (req, res) =>{

    const { id, name, price} = req.body;
    const newNumber: string = String(productsList.length + 1)

    const newProduct: Products = {
        id: newNumber,
        name,
        price
    };
    productsList.push(newProduct)

    res.send(productsList)    
});

// Ex 4
// Crie um endpoint que retorna todos os produtos.

app.get("/produtos", (req, res) =>{
    res.send(productsList)
    console.log(productsList)
})

// Ex 5
//Crie um endpoint que edita o preço de um determinado produto e 
//retorna a lista de produtos atualizada.

app.put("/altera-produtos/:id", (req, res) =>{
    try {
        const {id, price} = request.body
        const id = request.paramsid

        type BodyValue = {
            id: string,
            price: number
        }

        const objProduct: BodyValue = {
            id,
            price
        }
        if (!id || !price){
            throw new Error ("Não aceita valor vazio")
        }
        
        const [getPrice] : Products [] = productsList.filter((product)=>{
            return product.price.includes(price)
        })
        const changePrice = getPrice.id.map((price)=>{
            if(price.price.includes(objProduct.price)=>{
                return {
                    ...price
                }
            })
        })
    }
    catch(error: any){
        res.status(404).send({message: error.message})
    }
})

// Ex 6
// Construa um endpoint que deleta um determinado produto e 
//retorna a lista de produtos atualizada.

// Ex 7

// Ex 8

// Ex 9

