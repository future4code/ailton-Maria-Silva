import express, { Express } from "express";
import cors from "cors";

const app : Express = express();
app.use(express.json())

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

type Statement = {
    date: string,
    bankBalance: number,
    description: string
}
type User = {
    name: string,
    cpf: number,
    age: number,
    balance: number;
    bankStatement: Statement[]
};

const users: User[] = [

]

// criar conta
app.post("/usuarios", (req, res) =>{
    let errorCode = 400
    try{
        const {name, cpf, age, balance, bankStatement} = req.body
        if (!name || !cpf || !age || !balance || !bankStatement) {
            errorCode = 422
            throw new Error ("Por favor, veirifique se todos os campos estão completos")
        }
        if (age < 18) {
            errorCode = 403
            throw new Error ("Necessário ter mais de 18 anos para criar conta neste banco.")
        }
        const newUser: User = {
            name,
            cpf,
            age,
            balance,
            bankStatement
        }
        users.push(newUser)
        res.status(201).send({message: "Conta criada com sucesso"})
    }catch(error:any){
        res.status(errorCode || 500).send({message: error.message})
    }
})

// pegar saldo
app.get("/usuarios/:name", (req, res) =>{
    let errorCode = 400
    try{ 
        const name: string = req.params.name
        const userName = users.find((user) =>{
            return user.name === name
        })
        if (!name) {
            errorCode = 404
            throw new Error ("Usuário não encontrado. Por favor, tente um usuário válido")
        }
        const cpf: number = req.params.cpf
        const userCpf = users.find((user) =>{
            return user.cpf === cpf
        })
        if (!cpf){
            errorCode = 404
            throw new Error ("CPF não encontrado. Por favor, tente um cpf válido")
        }
        const userBalance = users.find((user) =>{
            return user.balance
        })
        if (name && cpf) {
            return userBalance
        }
        res.status(200).send(userBalance)

    }catch(error:any) {
        res.status(errorCode || 500).send({message: error.message})
    }
})

// adicionar saldo
app.put("/usuarios/:name", (req, res) =>{
    let errorCode = 400
    try{
        const nome: string = req.params.name
        const userName = users.find((user) =>{
            return user.name === nome
        })
        if (!nome) {
            errorCode = 404
            throw new Error ("Usuário não encontrado. Por favor, tente um usuário válido")
        }
        const {name, cpf, age, balance, bankStatement} = req.body
        if (!name || !cpf || !age || !balance || !bankStatement) {
            errorCode = 422
            throw new Error ("Por favor, veirifique se todos os campos estão completos")
        }
        const newUser: User = {
            name,
            cpf,
            age,
            balance,
            bankStatement
        }
        users.push(newUser)
        res.status(201).send({message: "Saldo atualizado com sucesso"})
    }catch(error:any){
        res.status(errorCode || 500).send({message: error.message})
}
})

// pagar conta
app.put("/usuarios", (req, res) =>{
    let errorCode = 400
    try{

    }catch(error:any){
        res.status(errorCode || 500).send({message: error.message})
}
})


// transferencia interna
app.put("/usuarios", (req, res) =>{
    let errorCode = 400
    try{

    }catch(error:any){
        res.status(errorCode || 500).send({message: error.message})
}
})