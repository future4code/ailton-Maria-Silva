import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

// Ex 4

const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

// a)

const createNews = async (news: any) => {
    return axios.put(`${BASE_URL}/news`, news)
}

// b)

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${BASE_URL}/news`, {
        title,
        content,
        date
    })
}