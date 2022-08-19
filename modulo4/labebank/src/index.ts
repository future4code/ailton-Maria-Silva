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


app.post("/usuarios", (req, res) =>{
    let errorCode = 400
    try{

    }catch(error)
})
