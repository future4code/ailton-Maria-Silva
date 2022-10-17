import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/BASE_URL";
import { Link } from "react-router-dom"
import { BigDiv, TextDiv, MoviesDiv, MoviePosterImg, PosterDiv, ButtonsDiv } from "./styled"

function Home (){
    const [movies, setMovies] = useState([]);
   
    useEffect(()=>{
        async function loadingMovies(){
            const response = await axios.get(`${BASE_URL}movie/popular`,{
                params:{
                    api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setMovies(response.data.results)
        }
        loadingMovies()

    }, [])
    async function filterByAction (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "28",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByAdventure (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "12",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByAnimation (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "16",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByComedy (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "35",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByCrime (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "80",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByDocumentary (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "99",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByDrama (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "18",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByFamily (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "10751",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByFantasy (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "14",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByHistory (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "36",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByHorror (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "27",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }       
    async function filterByMusic (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "10402",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByMystery (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "9648",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByRomance (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "10749",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByScienceFiction (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "878",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByScienceTvMovie (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "10770",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByThiller (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "53",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByWar (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "10752",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    async function filterByWestern (){
        const response = await axios.get(`${BASE_URL}discover/movie`,{
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
                with_genres: "37",
                page: 1,
            }
        })
        setMovies(response.data.results)
    }
    
    return (
        <div>
             <BigDiv>
                <TextDiv>
                    <h1>Milhões de filmes, séries e pessoas para descobrir.
                        Explore já</h1>
                    <p> FILTRE POR: </p>
                </TextDiv>
                <ButtonsDiv>
                    <button onClick={filterByAction}>AÇÃO</button>
                    <button onClick={filterByAdventure}>AVENTURA</button>
                    <button onClick={filterByAnimation}>ANIMAÇÃO</button>
                    <button onClick={filterByComedy}>COMÉDIA</button>
                    <button onClick={filterByCrime}>CRIME</button>
                    <button onClick={filterByDocumentary}>DOCUMENTÁRIO</button>
                    <button onClick={filterByDrama}>DRAMA</button>
                    <button onClick={filterByFamily}>FAMÍLIA</button>
                    <button onClick={filterByFantasy}>FANTASIA</button>
                    <button onClick={filterByHistory}>HISTÓRIA</button>
                    <button onClick={filterByHorror}>TERROR</button>
                    <button onClick={filterByMusic}>MÚSICA</button>
                    <button onClick={filterByMystery}>MISTÉRIO</button>
                    <button onClick={filterByRomance}>ROMANCE</button>
                    <button onClick={filterByScienceFiction}>FICÇÃO CIENTÍFICA</button>
                    <button onClick={filterByScienceTvMovie}>CINEMA TV</button>
                    <button onClick={filterByThiller}>THIRLER</button>
                    <button onClick={filterByWar}>GUERRA</button>
                    <button onClick={filterByWestern}>FAROESTE</button>
                </ButtonsDiv>
            </BigDiv>
            <MoviesDiv>
                {movies.map((movie)=>{
                    return(
                        <PosterDiv key={movie.id}>
                            <Link to={`/filme/${movie.id}`}><MoviePosterImg src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/></Link>
                            <p>{movie.title}</p>
                            <span>{movie.release_date}</span>
                        </PosterDiv>
                    )
                })}
            </MoviesDiv>
        </div>
    )
};

export default Home;