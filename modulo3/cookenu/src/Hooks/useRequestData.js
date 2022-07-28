import { useEffect, useState } from "react";
import axios from "axios";

const UseRequestData = (initialData, url) =>{
    const [data, setData] = useState(initialData)

    useEffect(()=>{
        axios.get(url, {
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            alert(err.response.data)
        })

    }, [url])
    return(data)
};
export default UseRequestData;