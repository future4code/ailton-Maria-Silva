import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/BASE_URL";
import { Link } from "react-router-dom"
import { BigDiv, TextDiv, MoviesDiv, MoviePosterImg, PosterDiv, ButtonsDiv } from "./styled"

function Home (){
    const [movies, setMovies] = useState([]);
    //const [filteredMovies, setFilteredMovies] = useState([])
    //const [genre, setGenre] = useState([]);
    //const [genreId, setGenreId] = useState();
    //const [button, setButton] = useState(false)

    async function getGenre(id){
        await axios.get(`${BASE_URL}movie/${id}`, {
            params:{
                api_key: "10cffe8b372d67cf83090a9ab3d08f56",
                language: "pt-BR",
            }
        }).then((response)=>{
            return(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
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

    async function filterByTerror (){
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

    const filterGenre = async (movies) =>{
        const arrayGenre = [];
        movies.map((movie)=>{
            arrayGenre.push(movie.genre_ids)
        })
        const movieGenre = arrayGenre.map((genre)=>{
            return genre.map(async (g)=>{
                return await getGenre(g)
            })
        })        
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
                    <button>AVENTURA</button>
                    <button>ANIMAÇÃO</button>
                    <button>COMÉDIA</button>
                    <button>CRIME</button>
                    <button>DOCUMENTÁRIO</button>
                    <button>DRAMA</button>
                    <button>FAMÍLIA</button>
                    <button>FANTASIA</button>
                    <button>HISTÓRIA</button>
                    <button onClick={filterByTerror}>TERROR</button>
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


/*

                    
                    const PokeCard = ({pokemon, isPokedex}) =>{
                    const navigate = useNavigate()
                    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)
                    
                    <button onClick={isPokedex ? addPokedex : RemovePokedex}> {isPokedex ? addPokedex : RemovePokedex } </button>


                    if(movies.genre_id === movieGenre.genres.id){
                        return movieGenre.genres.name
                    }


                    /*
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37
*/