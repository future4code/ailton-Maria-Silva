import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../services/BASE_URL"
import axios from "axios"
import {Link} from "react-router-dom"
import { BigDiv, MoviePosterImg, SinopseDiv, CastTitle, CastImg, CastDiv, MiniDivCast, ActorName, CharacterName, VideoTrailer } from "./styled"

function Movies (){

    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [movieCast, setMovieCast] = useState([])
    const [trailer, setTrailer] = useState(undefined)
    const [recomendations, setRecomendations] = useState([])
    console.log("TRAILER AQUI:", trailer)

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
                console.log(error)
            })
        };
        
        loadingMovie();
        return () =>{
            console.log("COMPONENTE FOI DESMOTADO")
        }
    },[id])
    useEffect(()=>{
        async function getMovieCast(){
        await axios.get(`${BASE_URL}movie/${id}/credits`, {
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
            }
        }).then((response)=>{
            setMovieCast(response.data.cast)
        }).catch((error)=>{
            console.log(error)
        })
    };
    getMovieCast();
    }, [id])

    useEffect(() =>{
        async function getTrailer(){
            await axios.get(`${BASE_URL}movie/${id}/videos`,{
                params:{
                    api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                    language: "pt-BR",
                }
            }).then((response)=>{
                setTrailer(response.data.results)
            }).catch((error)=>{
                console.log(error)
            })
        };
        getTrailer()
    }, [id])
    useEffect(()=>{
        async function getRecomendations(){
            await axios.get(`${BASE_URL}movie/${id}/recommendations`,{
                params:{
                    api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                    language: "pt-BR",
                    page: 1,
                }
            }).then((response)=>{
                if(response.data.results > 6){
                    response.data.results = 6
                }
                setRecomendations(response.data.results)
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        } ;
        getRecomendations()
    }, [id])

    return (
            <div>
                <BigDiv>
                    <div>
                    <MoviePosterImg src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} alt={movieDetail.title}/>
                    </div>
                    <SinopseDiv>
                        <h1>{movieDetail.title}</h1>
                        <p>{movieDetail.release_date} - {movieDetail.runtime} Minutos</p>
                        <h4>SINOPSE</h4>
                        <p>{movieDetail.overview}</p>
                    </SinopseDiv>
                </BigDiv>
                <div>
                    <CastTitle>Elenco Original</CastTitle>                    
                    <CastDiv>
                        {movieCast.map((cast)=>{
                            return(
                                <MiniDivCast key={cast.id}>
                                    <CastImg src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.character}/>
                                    <ActorName>{cast.original_name}</ActorName>
                                    <CharacterName>{cast.character}</CharacterName>
                                </MiniDivCast>

                            )
                        })}
                    </CastDiv>
                </div>
                <div>
                    <div>
                        <CastTitle> Trailer </CastTitle>
                        <VideoTrailer src={`https://youtube.com/results?search_query=${movieDetail.title} Trailer`} controls>
                        </VideoTrailer>
                        <p>
                            Se seu navegador não conseguir rodar esse vídeo, aqui está um <a target="blank" href={`https://youtube.com/results?search_query=${movieDetail.title} Trailer`}>link</a> alternativo.
                        </p>
                    </div>
                    <div>
                        <CastTitle> Recomendações </CastTitle>
                        <CastDiv>
                            {recomendations.map((r)=>{
                                return(
                                    <MiniDivCast key={r.id}>
                                        <Link to={`/filme/${r.id}`}><CastImg src={`https://image.tmdb.org/t/p/original/${r.poster_path}`}/></Link>
                                        <ActorName>{r.title}</ActorName>
                                        <CharacterName>{r.release_date}</CharacterName>
                                    </MiniDivCast>
                                )
                            })}
                        </CastDiv>
                    </div>
                </div>
            </div>    
    )
};

export default Movies;