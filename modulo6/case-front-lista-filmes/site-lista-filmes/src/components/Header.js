import {Link} from "react-router-dom"
import {HeaderDiv, TinyDiv, BigDiv, ButtonsDiv, TextDiv} from "./styled"

function Header(props){

    //[ genre ] = props
    //console.log(genre)


    return(
        <HeaderDiv>
            <TinyDiv>
                <Link to="/"> TMDB </Link>
                <Link to="/favorites"> FAVORITOS </Link>
            </TinyDiv>
        </HeaderDiv>
    )
};
export default Header;