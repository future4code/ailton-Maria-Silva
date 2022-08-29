import express, {Express} from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})

const app: Express = express();

app.use(express.json());
app.use(cors());

// Ex 1

// a) Se não for limitada ao índice 0, vai devolver  exatamente 
// o que o banco de dado devolve

// b)
const searchActor = async (name:string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT * 
    FROM Actors
    WHERE name = "${name}"`
    )
    return result
};

// c)
const countActors = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT(*) as count
    FROM Actors
    WHERE gender = "male"`)
};
const countActress = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT(*) as count
    FROM Actors
    WHERE gender = "female"`)
};

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

// Ex 2
// a) 
const upDateSalary = async (id:string, salary: number): Promise<any> =>{
    await connection("Actors")
    .update({
        salary: 900000,
    })
    .where("id", "001")
};

// b)
const deleteActor = async (id: string): Promise<void> =>{
    await connection("Actors")
    .delete()
    .where("id", "004")
};

// c)
const averageFemaleSalary = async (gender: string): Promise<any> =>{
    const result = await connection("Actors")
    .avg("salary as average")
    .where({gender});
    return result[0].average
};

// Ex 3
// a)

app.get("/user/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const actor = await getActorById(id);
        res.status(200).send(actor)
    } catch (err:any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
