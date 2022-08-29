import express, {Express} from "express";

const app: Express = express();

app.use(express.json());

// ex 1
//Faça novamente a instalação e configuração do Express na pasta do exercício.
// Para testar, crie um endpoint que aponte para o path “/ping”.
// Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

// ex 2
//Acesse a API do JSONPlaceholder e observe os 
//endpoints que buscam afazeres (”todos”).
// Crie uma variável de tipo para representar cada afazer.

type ToDo = {
    userId: string | number,
    id: number,
    title: string,
    completed: boolean
}

// ex 3
//Crie um array de afazeres para servir como base de dados da nossa
//API e utilize a tipagem desenvolvida no exercício anterior. 
const toDos: ToDo[] = [
    {
        userId: "1",
        id: 1,
        title: "acordar 5:45",
        completed: true
    },
    {
        userId: "1",
        id: 2,
        title: "tomar banho até as 6h",
        completed: true
    },
    {
        userId: "1",
        id: 3,
        title: "fazer mamadeira",
        completed: true
    },
    {
        userId: "1",
        id: 4,
        title: "fazer café",
        completed: true
    },
    {
        userId: "1",
        id: 5,
        title: "trocar a roupa da criança",
        completed: true
    },
    {
        userId: "1",
        id: 6,
        title: "checar mochila da criança",
        completed: false
    },
    {
        userId: "1",
        id: 7,
        title: "trocar fralda",
        completed: true
    },
    {
        userId: "1",
        id: 8,
        title: "manter a calma",
        completed: false
    },
    {
        userId: "1",
        id: 9,
        title: "garantir que a criança escovou os dentes e lavou o rosto",
        completed: true
    },
    {
        userId: "1",
        id: 10,
        title: "levar a criança pra escola",
        completed: true
    }
];
console.log(toDos)

// ex 4 
//Construa um endpoint que retorne todos os afazeres do 
//exercício anterior de acordo com um único status, ou seja, 
//retorne ou afazeres concluídos 
//ou somente os que ainda estão em andamento.
//--- jeito que eu fiz, errado

app.get("/todos", (req, res) => {
    const todos: object[] = req.params.toDos

    const tasksToDo: object[] = toDos.filter((task) =>{
        task.completed === false;
        return tasksToDo
    })
})

// correto

app.get("/todos/completed/:isCompleted", (req, res)=>{
    let isCompleted: any = req.params.isCompleted

    if (isCompleted === "true") {
        isCompleted = true
    } else if (isCompleted === false) {
        isCompleted = false
    } else {
        res.send("Path param da tarefa deve ser 'true' ou 'false' ")
    }

    const result = []

    for (let i = 0; i < toDos.length; i++){
        if(toDos[i].completed === isCompleted){
            result.push(toDos[i])
        }
    }
    res.send(result)
})



// ex 5
//Construa um endpoint de criação de afazer.
// A resposta deve retornar o array de afazeres atualizado.
// ----- jeito que eu fiz, errado

app.post("/adicionarTarefa/:userId", (req, res) => {

    const userId = request.params.userId;
    const {userId, id, title, completed} = request.body;

    const getUserId = userId.filter((user)=>{
        return user.userId === userId
    })

    const newTask: ToDo = {
        userId,
        id,
        title,
        completed
    }
})

// correto 

app.post("/todos", (req, res) =>{
    const userId = req.body.userId
    const title = req.body.title

    const newToDo: ToDo = {
        userId,
        id: Date.now(),
        title,
        completed: false
    }

    toDos.push(newToDo)

    res.send(toDos)
})

// ex 6
//Construa um endpoint de edição do status de um afazer, 
//ou seja, de completo para incompleto e vice-versa.
//jeito que eu fiz -- errado

app.get("/todos-redo", (req, res) => {
    const todos: object[] = req.params.toDos

    const tasksToDo: object[] = toDos.filter((task) =>{

        if (task.completed === false){
            return task.completed === true
        } else if (task.completed === true){
            return task.completed === false
        }
        return tasksToDo
    })
})

//correto

app.put("/todos/:id/completed", (req, res) =>{
    const id = Number(req.params.id)
    for (let toDo of toDos) {
        toDo.completed = !toDo.completed
    }
    res.send(toDos)
})

// ex 7 Construa um endpoint que deleta um determinado 
//afazer de acordo com sua id.
// errado

app.delete("/deletarTarefa/:userId", (req, res) => {

    const userId = request.params.userId;
    const {userId, id, title, completed} = request.body;

    const getUserId = userId.filter((user)=>{
        return user.userId === userId
    })
})

// correto
app.delete("todos/:id", (req,res)=>{
    const id = Number(req.params.id)

    for (let i = 0; i < toDos.length; i++){
        if (toDos[i].id === id){
            toDos.splice(i, 1)
        }
    }
    res.send(toDos)
})

// ex 8 Construa um endpoint que retorne todos os 
//afazeres de uma determinada id de usuário.
// errado

app.get("/todos-tasks", (req, res) => {
    const todos: object[] = req.params.toDos

    const tasks: boolean = toDos.map((task) =>{
        return task.completed
    })
    console.log(tasks)
})

// correto

app.get("/users/:userId/todos", (req, res) =>{
    const userId = Number(req.params.userId)

    const result = []

    for (let toDo of toDos) {
        if (toDo.userId === userId) {
            result.push(toDo)
        }
    }
    res.send(result)
})

// ex 9

app.get("/ping")
//Esse endpoint retorna uma resposta ao ping

app.get("/todos")
//Esse endpoint retorna tarefas que a fazer

app.post("/adicionarTarefa/:userId")
// Esse endpoint adiciona tarefas de acordo com o Id do usuario

app.get("/todos-redo")
// Esse endpoint retorna as tarefa ao contrário

app.delete("/deletarTarefa/:userId")
// Esse endpoint deleta tarefa de acordo com o Id do usuario

app.get("/todos-tasks")
// Esse endpoint retorna apenas as tarefas










app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});