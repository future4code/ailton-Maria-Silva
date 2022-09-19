import {connection} from "./BaseDataBase"

const createTables = async () =>{
    await connection.raw(`

    CREATE TABLE (
        id VARCHAR (255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255)
    );
    `)
}