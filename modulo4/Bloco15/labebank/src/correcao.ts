import express, { Express } from "express";
import cors from "cors";

const app : Express = express();
app.use(express.json())

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

type Transaction = {
    value: number,
    date: Date,
    description: string
}

type Account = {
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}

const accounts : Account[] = []

// 1 - Criar nova conta bancária
app.post("/users/create", (req, res) => {
    try {
        const {name, cpf, dateOfBirthAsString} = req.body
        const [day, month, year] = dateOfBirthAsString.split("/")
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        // validar as entradas da requisição
        const ageMiliseconds: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = ageMiliseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18){
            res.statusCode = 406
            throw new Error ("")
        }
        accounts.push({
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        res.status(201).send("Conta criada com sucesso.")

    } catch(error: any){
        res.status(400).send(error.message)
    }
})

app.get("/users/all", (req, res) =>{
    try{
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada.")
        }
        res.status(200).send(accounts)

    }catch (error: any){
        res.send(error.message)
    }
})