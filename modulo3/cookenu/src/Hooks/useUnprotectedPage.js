import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const useUnprotectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    }, [navigate])
};
export default useUnprotectedPage;