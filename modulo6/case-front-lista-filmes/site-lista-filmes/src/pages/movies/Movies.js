import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../services/BASE_URL"
import axios from "axios"
import { BigDiv} from "./styled"

function Movies (){

    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})

    useEffect(()=>{
        async function loadingMovie(){
            await axios.get(`${BASE_URL}movie/${id}`, {
                params:{
                    api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                    language: "pt-BR",
                }
            }).then((response)=>{
                setMovieDetail(response.data)
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
        }
        loadingMovie();
        return () =>{
            console.log("COMPONENTE FOI DESMOTADO")
        }
    },[])

    return (
            <div>
                <BigDiv>
                    <div>
                        <h1>{movieDetail.title}</h1>
                        <span>{movieDetail.release_date} - {movieDetail.genre} - {movieDetail.runtime}</span>
                        <h4>SINOPSE</h4>
                        <p>{movieDetail.overview}</p>
                    </div>
                </BigDiv>
                <div>

                </div>
                
            </div>    
    )
};

export default Movies;