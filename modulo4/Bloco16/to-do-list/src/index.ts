import express, {Express} from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})

const app: Express = express();
app.use(express.json());
app.use(cors())



// cadastro: pedir nome, apelido e email do usuario
// tarefa: titulo, descrição, data limite, status "to do", "doing" e "done", e usuário pedinte "foreing key" 

// Ex 1

type User = {
    name: string,
    nickname: string,
    email: string
}

const users: User[] = []

app.post("/user", (req, res) => {
    let errorCode = 400

    try {
        const {name, nickname, email} = req.body;
        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error ("Por favor, preencha todos os campos para prosseguir.")
        }
        const newUser = {
            name,
            nickname,
            email
        }
        users.push(newUser)
        res.status(201).send({message: "Usuário criado com sucesso!"})

    } catch (error: any) {
        res.status(errorCode || 500).send({message: error.message})
    }
})

// Ex 2

app.get("/user/:id", (req, res) =>{
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const user = users.find((user) => {
            return user.id === id
        })
        if(!id) {
            errorCode = 404
            throw new Error("Usuário não encontrado, por favor, tente um id válido")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode || 500).send({message: error.message})        
    }
})

// Ex 3
app.put("/user/edit/:id", (req, res) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const user = users.find((user) => {
            return user.id === id
        })
        if(!id) {
            errorCode = 404
            throw new Error("Usuário não encontrado, por favor, tente um id válido")
        }
        const {name, nickname, email} = req.body;
        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error ("Por favor, preencha todos os campos para prosseguir.")
        }
        const newUser = {
            name,
            nickname,
            email
        }
        users.push(newUser)
        res.status(201).send({message: "Usuário alterado com sucesso!"})

    } catch (error: any) {
        res.status(errorCode || 500).send({message: error.message}) 
    }
})


// Ex 4
app.post("/task", (req, res) =>{
    let errorCode = 400

    try {
        const {title, description, status, limit_date} = req.body;
        if (!title || !description || !status || !limit_date) {
            errorCode = 422
            throw new Error ("Por favor, preencha todos os campos para prosseguir.")
        }
        const newTask = {
            title,
            description,
            status,
            limit_date
        }
        taskList.push(newTask)
        res.status(201).send({message: "Tarefa adicionada com sucesso!"})

    } catch (error: any) {
        res.status(errorCode || 500).send({message: error.message})
    }
})


// Ex 5
app.get("/task/:id", (req, res) =>{
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const task = taskList.find((task) => {
            return task.id === id
        })
        if(!id) {
            errorCode = 404
            throw new Error("Tarefa não encontrada, por favor, tente um id válido")
        }
        res.status(200).send(taskList)
    } catch (error: any) {
        res.status(errorCode || 500).send({message: error.message})        
    }
})


// Ex 6


// Ex 7


// Ex 8


const server = app.listen(3003, () =>{
    console.log(`Server is running in http://localhost:3003`);
});

/*

("/user", (req, res) => {
    let errorCode = 400

    try {

    } catch (error: any) {
        
    }
})

*/
