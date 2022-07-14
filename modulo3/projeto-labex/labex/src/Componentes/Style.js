import styled from "styled-components";

export const Container = styled.div`
    //border: 2px solid whitesmoke;
    //background-color: black;
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    width: 64vw;
    height: 84vh;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    >button{
        background-color: black;
        color: yellowgreen;
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
    width: 80%;
    height: 30px;
    border-color: yellow;
    border-width: 1px;
    padding: 4px 8px;
    margin: 0px 0px 15px;
`
export const ContainerTrips = styled.div`
    //background-color: gray;
    background-blend-mode: lighten;
    color: white;
    padding: 5%;
    font-size: x-large; 
`
