import axios from "axios";
import { BASE_URL } from "../Constants/urls"

export const createRecipe = (body, clear, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res)=>{
        console.log(res.data.message)
        alert(res.data.message)
        clear()
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err.response.data.message)
        alert(err.response.data.message)
    })
};