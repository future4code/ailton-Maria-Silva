import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

type user = {
    id: string,
    name: string,
    email: string
}
// Ex 3

// a) no meu não deu erro 
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`)
    return response.data
}

// b) Não entendi

// c)
const getSubscribers = async (): Promise<user[]> =>{
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}
