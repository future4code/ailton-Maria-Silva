import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Movies from "./pages/movies/Movies"
import Header from "./components/Header"

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path= "/" element={ <Home/> }/>
                <Route path="/filme/:id" element= { <Movies/> } />
            </Routes>
        </BrowserRouter>
    )
};

export default RoutesApp