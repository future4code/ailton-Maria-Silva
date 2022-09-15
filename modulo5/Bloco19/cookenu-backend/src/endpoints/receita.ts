import {Request, Response} from "express"

export async function postarReceita (req: Request, res: Response) {
    try {

        const {title, description, createdAt} = req.body
        
        if (!title || !description || !createdAt){
            throw new Error("Preencha todos os campos para continuar.")
        }
        
    } catch (error:any) {
        
    }
}

/*
export async function signup (req: Request, res: Response){
    try {
        const {name, email, password} = req.body

        if(password.lenght < 6){
            throw new Error("Senha deve ter mais de 6 caracteres.")
        }

        if(!name || !email || !password){
            throw new Error("Preencha todos os campos para continuar.")
        }
        console.log("asdasfdsfadgsf")

        const userDataBase = new UserDataBase()
        
        const user = await userDataBase.findUserByEmail(email)

        if(user){
            throw new Error ("Email já cadastrado.")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({message: "Usuário criado com sucesso.", token})

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}
*/