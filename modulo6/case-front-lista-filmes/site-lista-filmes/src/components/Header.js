import {Link} from "react-router-dom"
import {HeaderDiv, TinyDiv } from "./styled"

function Header(){

    return(
        <HeaderDiv>
            <TinyDiv>
                <Link to="/"> TMDB </Link>
            </TinyDiv>
        </HeaderDiv>
    )
};
export default Header;