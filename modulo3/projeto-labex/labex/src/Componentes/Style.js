import styled from "styled-components";

export const Container = styled.div`
    //background-color: rgba( 0, 0, 0, 0.2);
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 64vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    >h1, h2{
        padding-top: 5%;
    }
`
export const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        background-color: black;
        color: white;
        padding:20px;
        border-radius: 30px;
        :hover{
            background-color: white;
            color: black;
        }
    }
`
export const CreateTripInput = styled.input`
    width: 80%;
    height: 30px;
    border: none;
    border-bottom: 2px solid yellow;
    border-width: 2px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
    background-blend-mode: soft-light;
`
export const SelectTrip = styled.select`
    width: 82%;
    height: 30px;
    border:none;
    border-bottom: 2px solid yellow;
    border-width: 2px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
    background-blend-mode: soft-light;
`
export const ContainerTrips = styled.div`
    //background-color: gray;
    background-blend-mode: lighten;
    color: white;
    padding: 5%;
    font-size: x-large; 
`
export const StyleBotaoAdmin = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
`