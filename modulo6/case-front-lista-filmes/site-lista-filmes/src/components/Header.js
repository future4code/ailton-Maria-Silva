import {HeaderDiv, TinyDiv, ButtonTMDB } from "./styled"
import { useNavigate } from "react-router-dom"

function Header(){
    const navigate = useNavigate()
    function handleClick(){
        navigate("/")
    }

    return(
        <HeaderDiv>
            <TinyDiv>
                <ButtonTMDB onClick={handleClick}> TMDB </ButtonTMDB>
            </TinyDiv>
        </HeaderDiv>
    )
};
export default Header;