import express, {Express} from "express";
import cors from "cors";

const app : Express = express()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

type User = {
    id : number,
    name : string,
    phone : number | string,
    email : string,
    website : string,
    posts : object
}

const myHouseUsers : User[] = [
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

app.get("/users", (request, response)=>{
    response.send(myHouseUsers)
})

app.get("/users/:id/post", (request, response)=>{
    const id = request.params.id;
    const userPost = request.body;
    const acharPost :  User[] = myHouseUsers.filter((user)=>{
        return user.posts
    })
})

app.listen(3003, () => {
    console.log("Server is running ...")
});