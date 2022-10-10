import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../services/BASE_URL";
import styled from "styled-components"
import { Link } from "react-router-dom"

const MoviesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-right: 12%;
    padding-left: 12%;
    border: 2px solid purple;
    margin-right: 4%;
    margin-left: 4%;
    gap: 4%;
    line-gap-override: 4%;
`
const MoviePosterImg = styled.img`
    //position: absolute;
    width: 176px;
    height: 264px;
`
const PosterDiv = styled.div`
    border: 2px solid pink;
    padding-bottom: 8%;
    >p{
        font-weight: bold;
    }
    >span{
        color: gray;
    }
`

function Home (){
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState();

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
    console.log(movies)
    
    return (
        <div>
            <MoviesDiv>
                {movies.map((movie)=>{
                    return(
                        <PosterDiv key={movie.id}>
                            <Link to={`/filmes/${movie.id}`}><MoviePosterImg src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/></Link>
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