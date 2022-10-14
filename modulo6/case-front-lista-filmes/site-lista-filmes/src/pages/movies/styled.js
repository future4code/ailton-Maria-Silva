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
    width: 175px;
    height: 221.92px;
    border-radius: 4px;
`
export const CastDiv = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    //flex-wrap: wrap;
    overflow-x: scroll;
`