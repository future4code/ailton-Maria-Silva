import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Movies from "./pages/movies/Movies"
import Header from "./components/Header"
import Erro from "./pages/erro/Erro"

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path= "/" element={ <Home/> }/>
                <Route path="/filme/:id" element= { <Movies/> } />
                <Route path="/*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
};

export default RoutesApp