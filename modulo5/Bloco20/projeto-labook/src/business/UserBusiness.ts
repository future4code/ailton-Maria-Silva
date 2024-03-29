import { UserDatabase } from "../database/UserDatabase"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { IGetUsersOutputDTO, IGetUsersDBDTO, IGetUsersInputDTO, IGetUsersUser, ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async(input: ISignupInputDTO) =>{
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password){
            throw new Error("Preencha todos os campos para continuar.")
        }
        if(typeof name !== "string"){
            throw new Error ("Nome inválido, precisa ser um texto.")
        }
        if(name.length < 3){
            throw new Error("Nome precisa ter mais de três caracteres.")
        }
        if(typeof email !== "string"){
            throw new Error("E-mail inválido")
        }
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            throw new Error("Parâmetro 'email' inválido")
        }
        if (typeof password !== "string"){
            throw new Error ("Senha fraca, utilize números e letras.")
        }
        if (password.length < 6){
            throw new Error ("Senha fraca, utilize mais de seis caracteres.")
        }
        const userDB = await this.userDatabase.findByEmail(email)
        
        if(userDB){
            throw new Error("E-mail já cadastrado no nosso banco de dados.")
        }
        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)
        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )
        await this.userDatabase.createUser(user)
        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token = this.authenticator.generateToken(payload)
        const response = {
            message: "Cadastro realizado com sucesso",
            token
        }
        return response
    }

    public login = async (input: ILoginInputDTO) =>{
        const email = input.email
        const password = input.password

        if(!email || !password){
            throw new Error("Preencha todos os campos para continuar.")
        }
        if(typeof email !== "string"){
            throw new Error("Use um e-mail válido.")
        }
        if(email.length < 3){
            throw new Error("E-mail precisa ter mais de três caracteres.")
        }
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("E-mail' inválido")
        }
        if(typeof password !== "string"){
            throw new Error("Senha inválida.")
        }
        if(password.length < 6){
            throw new Error("Senha deve possuir mais de seis caracteres.")
        }
        const userDB = await this.userDatabase.findByEmail(email)
        if(!userDB){
            throw new Error("E-mail não cadastrado.")
        }
        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )
        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())
        if(!isPasswordCorrect){
            throw new Error("Senha incorreta.")
        }
        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token = this.authenticator.generateToken(payload)
        const response = {
            message: "Login realizado com sucesso",
            token
        }
        return response
    }
    public getUsers = async(input: IGetUsersInputDTO) =>{
        const token = input.token
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page -1)
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("Token inválido ou faltando.")
        }
        const getUsersInputDB: IGetUsersDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }
        const usersDB = await this.userDatabase.getUsers(getUsersInputDB)

        const users = usersDB.map(userDB =>{
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role
            )
            const userResponse: IGetUsersUser = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }
            return userResponse
        })
        const response: IGetUsersOutputDTO = {
            users
        }
        return response

    }


}