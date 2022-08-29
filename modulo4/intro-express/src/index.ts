import express, {Express} from "express";
import cors from "cors";

const app : Express = express()

app.use(express.json());
app.use(cors());
// ex 1
app.get("/", (req, res) => {
    res.send("Hello from Express")
})
//errado  ---- ex 2
type User1 = {
    id : number,
    name : string,
    phone : number | string,
    email : string,
    website : string,
    posts : object
}

//correto  ------- ex 2
type User = {
    id : number,
    name : string,
    phone : number | string,
    email : string,
    website : string
}

//errado ------ ex 3
const myHouseUsers1 : User1[] = [
    {
        id : 1,
        name : "Helena Menossi",
        phone : "555-1807",
        email : "helena@gmail.com",
        website : "www.helenamenossi.com.br",
        posts : {
            title : "asdasd",
            post : "asudhashoasjiahshaiohsia"
        }
    },

    {
        id : 2,
        name : "Vinicius Menossi",
        phone : "555-2310",
        email : "vinicius@gmail.com",
        website : "www.viniciustunico.com.br",
        posts : {
            title : "asdasd",
            post : "asudhashoasjiahshaiohsia"
        }

    },

    {
        id : 3,
        name : "Petite Noir",
        phone : "555-0108",
        email : "frajolinha@gmail.com",
        website : "www.frajolinha.com.br",
        posts : {
            title : "asdasd",
            post : "asudhashoasjiahshaiohsia"
        }
    },

    {
        id : 4,
        name : "Bruce Wayne",
        phone : "555-0202",
        email : "batman@gmail.com",
        website : "www.iambatman.com.br",
        posts : {
            title : "asdasd",
            post : "asudhashoasjiahshaiohsia"
        }
    }

];
//----------------------------------------------
//correto

const myHouseUsers : User[] = [
    {
        id : 1,
        name : "Helena Menossi",
        phone : "555-1807",
        email : "helena@gmail.com",
        website : "www.helenamenossi.com.br"
    },

    {
        id : 2,
        name : "Vinicius Menossi",
        phone : "555-2310",
        email : "vinicius@gmail.com",
        website : "www.viniciustunico.com.br"
    },

    {
        id : 3,
        name : "Petite Noir",
        phone : "555-0108",
        email : "frajolinha@gmail.com",
        website : "www.frajolinha.com.br"
    },

    {
        id : 4,
        name : "Bruce Wayne",
        phone : "555-0202",
        email : "batman@gmail.com",
        website : "www.iambatman.com.br"
    }
];

//ex 4

//errado
app.get("/users", (request, response)=>{
    response.send(myHouseUsers)
}) 

//correto
app.get("/users", (req : Request, res : Response) => {
    if(!myHouseUsers.lenght){
        res.status(401).send("Não tem usuários.")
    }
    res.status(201).send(myHouseUsers)
})

// ex 5 - errado
app.get("/users/:id/post", (request, response)=>{
    const id = request.params.id;
    const userPost = request.body;
    const acharPost :  User[] = myHouseUsers.filter((user)=>{
        return user.posts
    })
})

//correto

type Post = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// ex 6

const posts: Post[] = [
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd" 
        },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
]

//ex 7

app.get("/posts", (req: Request, res: Response) => {
    if(!posts.lenght){
        res.status(401).send("Não tem posts.")
    }
    res.status(201).send(posts)
})

//ex 8

app.get("/post/userId", (req: Request, res: Response) => {
    let user = req.params.userId

    const post = posts.filter((post)=>{
        return post.userId == user
    })

    if (!user) {
        return res.status(400).send("Entre com user Id válido.")
    } else if (post.lenght === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
    }
    res.status(201).send(post)
})

app.listen(3003, () => {
    console.log("Server is running ...")
});