import express, {Express} from "express";

const app: Express = express();

app.use(express.json());

// ex 1
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

// ex 2

type ToDo = {
    userId: string,
    id: number,
    title: string,
    completed: boolean
}

// ex 3

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

app.get("/todos", (req, res) => {
    const todos: object[] = req.params.toDos

    const tasksToDo: object[] = toDos.filter((task) =>{
        task.completed === false;
        return tasksToDo
    })
})

// ex 5

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

// ex 6

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

// ex 7 Construa um endpoint que deleta um determinado afazer de acordo com sua id.

app.delete("/deletarTarefa/:userId", (req, res) => {

    const userId = request.params.userId;
    const {userId, id, title, completed} = request.body;

    const getUserId = userId.filter((user)=>{
        return user.userId === userId
    })
})

// ex 8 Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

app.get("/todos-tasks", (req, res) => {
    const todos: object[] = req.params.toDos

    const tasks: boolean = toDos.map((task) =>{
        return task.completed
    })
    console.log(tasks)
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