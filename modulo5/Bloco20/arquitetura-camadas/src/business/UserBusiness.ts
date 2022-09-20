import { MissingFields } from "../error/MissingFields";
import { userDTO, USER_ROLES } from "../model/User";


export class UserBusiness {
    async create(userDTO: userDTO):Promise<string>{
        const {name, email, password, role} = userDTO

        if(!name || !email || !password || role){
            throw new MissingFields()
        }
        if(name.length < 3){
            throw new Error("O nome deve ter mais de três caracteres.")
        }
        if (password.length < 6){
            throw new Error("A senha deve ter no minimo seis caracteres.")
        }
        const userData = new UserData()
    }
}