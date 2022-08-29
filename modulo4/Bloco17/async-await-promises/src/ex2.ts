import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

// Ex 2

// a) Na função nomeada o async vai antes

// b)

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`)
    return response.data
}
