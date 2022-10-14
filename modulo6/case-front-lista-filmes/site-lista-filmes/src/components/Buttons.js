
export async function filterByAction (){
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
export async function filterByTerror (){
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
export async function filterByTerror (){
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