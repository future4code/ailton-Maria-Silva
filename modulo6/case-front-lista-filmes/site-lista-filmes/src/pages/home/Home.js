import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/BASE_URL";
import { Link } from "react-router-dom"
import { BigDiv, TextDiv, MoviesDiv, MoviePosterImg, PosterDiv, ButtonsDiv } from "./styled"

function Home (){
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState([]);

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
            filterGenre(response.data.results)
        }
        loadingMovies()
    }, [])
    //console.log(movies)

    const filterGenre = (movies) =>{
        const arrayGenre = [];
        movies.map((movie)=>{
            arrayGenre.push(movie.genre_ids)
        })
        const newArryGenre = [...new Set(arrayGenre)]
        setGenre(newArryGenre)
        
    }
    //console.log(genre)
    
    return (
        <div>
             <BigDiv>
                <TextDiv>
                    <h1>Milhões de filmes, séries e pessoas para descobrir.
                        Explore já</h1>
                    <p> FILTRE POR: </p>
                </TextDiv>
                <ButtonsDiv>
                    <button>AÇÃO</button>
                    <button>AVENTURA</button>
                    <button>ANIMAÇÃO</button>
                    <button>COMÉDIA</button>
                    <button>CRIME</button>
                    <button>DOCUMENTÁRIO</button>
                    <button>DRAMA</button>
                    <button>FAMÍLIA</button>
                    <button>FANTASIA</button>
                    <button>HISTÓRIA</button>
                    <button>TERROR</button>
                    <button>MÚSICA</button>
                    <button>MISTÉRIO</button>
                    <button>ROMANCE</button>
                    <button>FICÇÃO CIENTÍFICA</button>
                    <button>CINEMA TV</button>
                    <button>THIRLER</button>
                    <button>GUERRA</button>
                    <button>FAROESTE</button>
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