import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/BASE_URL";
import { Link } from "react-router-dom"
import { BigDiv, TextDiv, MoviesDiv, MoviePosterImg, PosterDiv, ButtonsDiv } from "./styled"

function Home (){
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState([]);
    //const [button, setButton] = useState(false)

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
    console.log(movies)

    const filterGenre = (movies) =>{
        const arrayGenre = [];
        movies.map((movie)=>{
            arrayGenre.push(movie.genre_ids)
        })
        const newArrayGenre = [...new Set(arrayGenre)]
        setGenre(newArrayGenre)
        
    }
    console.log(genre)

    const buttonClicked = () =>{

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
                    <button>AÇÃO</button>
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


/*

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
                    
                    const PokeCard = ({pokemon, isPokedex}) =>{
                    const navigate = useNavigate()
                    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)
                    
                    <button onClick={isPokedex ? addPokedex : RemovePokedex}> {isPokedex ? addPokedex : RemovePokedex } </button>

*/