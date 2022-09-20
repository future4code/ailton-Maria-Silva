import {UserModel} from "../model/UserModel"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase{
    public async createUser(user:UserModel){
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickName(),
            password: user.getPassword
        }).into("to_do_list_users")
    }
    
    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("to_do_list_users").where({ id })
    }

    public async getUserByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ email: email })

        return result
    }

    public async getUserByPassword(senha: string) {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ password: senha })

        return result
    }
}