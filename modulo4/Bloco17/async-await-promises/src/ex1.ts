import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

const news = {
    title: "Ah",
    content: "Esse ano pro Papai Noel, eu vou pedir socorro",
    date: Date.now
}

// Ex 1

const getSubscribers = async (news: any) => {
    const response = await axios.get(`${BASE_URL}/subscribers`)
    return response.data
}

// a) GET

// b) <any[]>

// c)
async function getSubscribers(): Promisse<any[]> {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
}
