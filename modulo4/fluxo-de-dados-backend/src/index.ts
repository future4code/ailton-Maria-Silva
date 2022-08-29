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
    const newNumber: number = productsList.length + 1

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
//retorna a lista de produtos atualizada. // errado

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

// Ex 6 e 9
// Construa um endpoint que deleta um determinado produto e 
//retorna a lista de produtos atualizada.

// Ex 9
//Refatore o endpoint do exercício 6 (deletar produto) para que
// sejam implementados fluxos de validação dos dados recebidos (`id`)

//- erro caso `id` não seja recebido (exceto em casos de path params)
//- erro caso o produto escolhido não seja encontrado
//- erro caso algo inesperado aconteça

app.delete("produtos/:id", (req,res) =>{
    try{
        const { id } = req.params

        const productIndex = productsList.findIndex(product => product.id == (id))
        if (productIndex < 0) {
            res.statusCode = 404
            throw new Error("Product not found")
        }
        productsList.splice(productIndex, 1)
        res.status(200).send(productsList)
    } catch (error : any) {
        res.status(404).send(error.message)
    }
})

// Ex 7
//  Refatore o endpoint do exercício 3 (criar produto) para que sejam 
//implementados fluxos de validação dos dados recebidos (`name` e `price`)
    
//  - erro caso um ou nenhum deles forem recebidos
//  - erro caso `name` seja diferente de `string`
//  - erro caso `price` seja diferente de `number`
//  - erro caso `price` seja igual ou menor que `0`
//  - erro caso algo inesperado aconteça

app.post("/produtos", (req, res) =>{
    try {
        const {name, price} = req.body
        if(!name || !price) {
            throw new Error ("Precica preencher nome e preço do produto")
        }
        if (typeof name !== "string" || typeof price !== "number") {
            throw new Error ("Produto precisa ter nome, e preço precisa ser em número")
        }
        if (price <= 0) {
            throw new Error ("Preço precisa ser maior que zero")
        }
        const newProduct: Products = {
            id: productsList.length + 1,
            name: name,
            price: price
        }
        productsList.push(newProduct)
        res.status(201).send(productsList)
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.status(422).send(error.message)
        }
    }
})

// Ex 8
// Refatore o endpoint do exercício 5 (editar produto) para que
// sejam implementados fluxos de validação dos dados recebidos (`price`)

//- erro caso `price` não seja recebido
//- erro caso `price` seja diferente de `number`
//- erro caso `price` seja igual ou menor que `0`
//- erro caso id não seja recebida (exceto em casos de path params)
//- erro caso o produto a ser editado não seja encontrado
//- erro caso algo inesperado aconteça

app.put("produtos/:id", (req, res) =>{
    try {
        const { id } = req.params
        const { price, name } = req.body

        if (!price && !name) {
            res.statusCode = 422
            throw new Error ("Produto precisa ter nome, e preço")
        } else if (typeof price !== "number" || typeof name !== "string") {
            res.statusCode == 422
            throw new Error ("Preço do produto precisa ser um numero, e nome precisa ser em letras")
        } else if (price <= 0) {
            res.statusCode = 422
            throw new Error ("Preço do produto precisa ser maior que zero")
        }

        const productIndex = productsList.findIndex(product => product.id == Number(id))
        
        if (productIndex < 0) {
            res.statusCode = 404
            throw new Error ("Produto não encontrado")
        } 

        if (!name) {
            productsList[productIndex].price = price
            res.setMaxListeners(200).send(productsList)
        } else if (!price) {
            productsList[productIndex].name = name
            res.status(200).send(productsList)
        } else {
            productsList[productIndex].name
            productsList[productIndex].price
            res.status(200).send(productsList)
        }
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.send(error.message)
        }
    }
})

