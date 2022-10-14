import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../services/BASE_URL"
import axios from "axios"
import { BigDiv, MoviePosterImg, SinopseDiv, CastImg, CastDiv } from "./styled"

function Movies (){

    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [movieCast, setMovieCast] = useState([])

    useEffect(()=>{
        async function loadingMovie(){
            await axios.get(`${BASE_URL}movie/${id}`, {
                params:{
                    api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                    language: "pt-BR",
                }
            }).then((response)=>{
                setMovieDetail(response.data)
            }).catch((error)=>{
            })
        };
        
        loadingMovie();
        return () =>{
            console.log("COMPONENTE FOI DESMOTADO")
        }
    },[])
    useEffect(()=>{
        async function getMovieCast(){
        await axios.get(`${BASE_URL}movie/${id}/credits`, {
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR"
            }
        }).then((response)=>{
            setMovieCast(response.data.cast)
        }).catch((error)=>{
            console.log(error)
        })
    };
    getMovieCast();
    }, [])

    console.log(movieCast)

    

    return (
            <div>
                <BigDiv>
                    <div>
                    <MoviePosterImg src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} alt={movieDetail.title}/>
                    </div>
                    <SinopseDiv>
                        <h1>{movieDetail.title}</h1>
                        <p>{movieDetail.release_date} - {movieDetail.runtime}</p>
                        <h4>SINOPSE</h4>
                        <p>{movieDetail.overview}</p>
                        <p>Screenplay</p>
                        <p>Diretor</p>
                    </SinopseDiv>
                </BigDiv>
                <div>
                    <h4>ELENCO ORIGINAL</h4>
                    {movieCast.map((cast)=>{
                        return(
                            <div key={cast.id}>
                                <CastImg src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.character}/>
                                <p>{cast.original_name}</p>
                                <p>{cast.character}</p>
                            </div>

                        )
                    })}
                </div>
            </div>    
    )
};

export default Movies;