import styled from "styled-components"

export const TextDiv = styled.div`
    text-align: center;
    padding-right: 330px;
    padding-left: 330px;
    padding-top: 80px;
    >h1{
        font-size: xxx-large;
        padding-bottom: 2px;
    }
`
export const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1440px;
    height: 449px;
    left: 0px;
    top: 56px;
    color: white;
    background-color: #2D0C5E;
    margin-left: 4.55%;
    
`
export const ButtonsDiv = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-right: 4%;
    padding-left: 4%;
    margin-right: 6%;
    margin-left: 6%;
    margin-top: 5%;
    gap: 1%;
    > button{
        min-width: 96px;
        min-height: 40px;
        padding-right: 16px;
        padding-left: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        top: 329px;
        left: 537px;
        border: 1px solid #2D0C5E;
        border-radius: 4px;
        :hover{
            cursor: pointer;
        }
        :active{
            background-color: #D18000;
            color: white;
        }
    }
`
export const MoviesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-right: 12%;
    padding-left: 12%;
    margin-right: 4.55%;
    margin-left: 4.55%;
    gap: 4%;
`
export const MoviePosterImg = styled.img`
    width: 176px;
    height: 264px;
`
export const PosterDiv = styled.div`
    padding-bottom: 4%;
    padding-top: 4%;
    width: 200px;
    height: 400px;
    >p{
        font-weight: bold;
    }
    >span{
        color: gray;
    }
`