import express, {Express} from "express";
import cors from "cors"

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () =>{
    console.log("Server is ruunign in http://localhost:3003");
});

//- **Exercício 1**
    
//Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.
// A lista está disponível abaixo.

let users1 = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("/usuarios", (req, res) =>{
    res.send(users1)
})

//*a. Qual método HTTP você deve utilizar para isso?*
// R: método GET

//*b. Como você indicaria a **entidade** que está sendo manipulada?*
// R: entidade usuario 

//- **Exercício 2**
    
//Agora, vamos refatorar o exercício 1 e implementar uma funcionalidade que busque
// todos os usuários que tenham uma propriedade `type` específica,
// recebendo apenas um `type` por vez. Após isso, responda:

//*a. Como você passou os parâmetros de type para a requisição? Por quê?
// R: colocando number onde recebe numeros, e string onde recebe letras

type User1 = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}
    
//*b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// R: para garantir que o usuario tenha apenas as opções que damos

enum Role = {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: Role,
    age: number
}

let users: User = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("usuario/:tipo", (req, res) =>{
    let errorCode = 400

    try {
        const type: string = req.params.type;
        if(!type) {
            errorCode = 404
            throw new Error ("Tipo não encontrado")
        }
        const user = users.find((user) =>{
            return user.type === type
        })
        if(!user) {
            errorCode = 404
            throw new Error ("Usuario não encontrado")
        }
        res.status(200).send(user)
    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
})

// - **Exercício 3**
    
//Vamos agora praticar o uso de buscas mais variáveis. 
//Refatore novamente o exercício 1 e implemente a funcionalidade de search,
// para encontrar um usuário buscando ****por **nome**.
    
// *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// R: nome

// *b. Altere este endpoint para que ele devolva uma mensagem
// de erro caso nenhum usuário tenha sido encontrado.

app.get("/usuario/:name", (req, res) => {
    let errorCode = 400

    try {
        const name: string = req.params.name
        const user = users.find((user) => {
            return user.name === name
        })
        if(!name) {
            errorCode = 404
            throw new Error("Usuario não foi encontrado, por favor digite um usuário válido")
        }
        res.status(200).send(user)
    }catch(error:any) {
        res.status(errorCode || 500).send({message: error.message})
    }
})

// - **Exercício 4**
    
//Fizemos algumas buscas no nosso conjunto de itens, agora é hora 
//de **adicionar** coisas. Comecemos criando um usuário na nossa lista.
// Crie um endpoint que use o método `POST` para adicionar 
//um item ao nosso conjunto de usuários.

app.post("/usuario", (req, res) => {
    let errorCode = 400
    try {
        const {id, name, email, type, age} = req.body
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error ("Por favor, veirifique se todos os campos estão completos")
        }
        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send({message: "Usuario criado com sucesso"})
    }catch(error:any){
        res.status(errorCode || 500).send({message: error.message})
    }
})
    
//a. Mude o método do endpoint para `PUT`. O que mudou?
// R: Nada, pois o não importa o nome, sim a lógica

//b. Você considera o método `PUT` apropriado para esta transação?
// Por quê?
// R: São boas práticas usar o POST para criar e o PUT para atualizar

