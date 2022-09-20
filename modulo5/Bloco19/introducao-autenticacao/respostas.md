`
Ex 1

a) Sim, por que você pode colocar números e caracteres especiais, pra aumentar a força da senha

b) Está na pasta src/services

Ex 2

const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

a) O código está conectando com o MySQL, para criar um novo usuario

b)

c)

Ex 3

a) Transforma o que é recebido em string

b)

Ex 4

a)

b)

c)

Ex 5

a)

Ex 6 

a)

b)

Ex 7

a)

b)

Ex 8

a)

b)

`