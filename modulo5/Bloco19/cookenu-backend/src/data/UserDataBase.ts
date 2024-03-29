import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    public async createUser(user:User): Promise<void>{
        try {
            await BaseDataBase.connection("User_Cookenu")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }

    public async findUserByEmail(email:string): Promise<User | undefined>{
        try {
            const user = await this.getConnection()
            .select("*")
            .from("User_Cookenu")
            .where({email: email});
            return user[0] && User.toUserModel(user[0]);
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }

    public async findUserById(id:string): Promise<User | undefined>{
        try {
            const user = await BaseDataBase.connection("User_Cookenu")
            .select("id", "name", "email")
            .from("User_Cookenu")
            .where({id: id});
            return user[0] && User.toUserModel(user[0]);            
        } catch (error:any) {
            throw new Error(error.sql.message || error.message)
        }
    }

    public async getAllUsers(): Promise<User[]>{
        try{
            const users = await BaseDataBase.connection("User_Cookenu").select(
                "id",
                "name",
                "email"
                );
        return users.map((user => User.toUserModel(user)))
        }catch(error: any){
            throw new Error(error.sql.message || error.message)
        }
    }
}
