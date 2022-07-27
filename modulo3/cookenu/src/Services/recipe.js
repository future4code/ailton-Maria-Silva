import axios from "axios";
import { BASE_URL } from "../Constants/urls"

export const createRecipe = (body, clear) =>{
    axios.post(`${BASE_URL}/recipe`, body, {
        header:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res)=>{
        console.log(res.data)
        alert(res.data.message)
        clear()
    }).catch((err)=>{
        console.log(err)
        alert(err.response.message)
    })
}