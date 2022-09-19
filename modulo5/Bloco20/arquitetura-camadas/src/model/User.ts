export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private passowrd: string,
        private role:USER_ROLES
    ) { }

    getId() {
        return this.id
    }

    getNome() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getSenha() {
        return this.passowrd
    }

    getRole(){
        return this.role
    }
}

export interface UserBD {
    id: string,
    name: string,
    email: string
}

export interface feedDB {
    id:string,
    title: string,
    description:string,
    createdAt:string,
    userId: string,
    userName: string
}

export interface userDTO {
    name:string,
    email:string,
    password:string,
    role:USER_ROLES
}