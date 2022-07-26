import axios from "axios";
import {BASE_URL} from "../Constants/urls";

export const login = (body, clear, navigate, setLogButton) =>{
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        navigate("/")
        setLogButton("LOGOUT")
    }).catch((err)=>{
        alert(err.response.data.message)
        console.log(err)
    })
};
//const navigate = useNavigate()
export const signUp = (body, clear, navigate, setLogButton) =>{
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        navigate("/")
        setLogButton("LOGOUT")
    }).catch((err)=> alert(err.response.data))
};