import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

// Ex 6

// a) Recebe um array de Promises, e retorna uma Promise, que resolve um array de Promises

// b) Para garantir uma melhor performance do código


// c) 

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {
    try {
        const promises = users.map(user =>{
            return axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(promises);
    } catch {
        console.log("Error")
    }
}