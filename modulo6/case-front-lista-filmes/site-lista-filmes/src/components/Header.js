import {Link} from "react-router-dom"
import {HeaderDiv, TinyDiv, BigDiv, ButtonsDiv, TextDiv} from "./styled"

function Header(){
    return(
        <HeaderDiv>
            <TinyDiv>
                <Link to="/"> TMDB </Link>
                <Link to="/favorites"> FAVORITOS </Link>
            </TinyDiv>
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
        </HeaderDiv>
    )
};
export default Header;