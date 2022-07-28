import axios from "axios";
import {BASE_URL} from "../Constants/urls";

export const login = (body, clear, navigate, setLogButton, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        navigate("/")
        setLogButton("LOGOUT")
    }).catch((err)=>{
        setIsLoading(false)
        alert(err.response.data.message)
    })
};
//const navigate = useNavigate()
export const signUp = (body, clear, navigate, setLogButton, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        navigate("/")
        setLogButton("LOGOUT")
    }).catch((err)=> alert(err.response.data.message))
};