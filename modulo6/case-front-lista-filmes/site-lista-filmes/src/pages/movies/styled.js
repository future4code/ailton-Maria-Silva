import styled from "styled-components"

export const BigDiv = styled.div`
    display: flex;
    flex-direction: row;
    //justify-content: center;
    //align-items: center;
    width: 1440px;
    height: 600px;
    left: 0px;
    top: 56px;
    color: white;
    background-color: #2D0C5E;
    //margin-left: 4.55%;
`
export const MoviePosterImg = styled.img`
    //position: absolute;
    margin-top: 10%;
    margin-left: 12%;
    width: 383px;
    height: 574px;
    border-radius: 4px;
`

export const SinopseDiv = styled.div`
    //padding-right: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 4%;
    >h1{
        padding-bottom: 2%;
        //border: 1px solid white;
    }
    >h4{
        padding-bottom: 2%;
        //border: 1px solid white;
    }
    >p{
        padding-bottom: 2%;
        //border: 1px solid white;
    }
    
`
export const CastImg = styled.img`
    max-width: 168px;
    max-height: 214px;
    border-radius: 4px;
`
export const CastDiv = styled.div`
    margin-top: 5%;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: clip;
    max-width: 1440px;
    gap: 2%;
    height: 300px;
    ::-webkit-scrollbar-thumb{
        border-radius: 20px;
    }
`
export const MiniDivCast = styled.div`
    width: 650px;
    height: 300px;
`
export const ActorName = styled.p`
    font-weight: bold
` 
export const CharacterName = styled.p`
    color: gray;
`
export const CastTitle = styled.h2` 
    margin-top: 6%;
    margin-left: 2%;
    margin-right: 2%;
`
export const VideoTrailer = styled.video`
    max-width: 907px;
    max-height: 510px;
    left: 112px;
    top: 1255px;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 6%;
    margin-bottom: 6%;
`