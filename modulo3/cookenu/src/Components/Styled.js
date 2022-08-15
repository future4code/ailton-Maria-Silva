import styled from "styled-components"

export const MainContainer = styled.header`
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 18vh;
    padding: 0 80px 0 80px;
`
export const PrettyButton = styled.button`
    background-color: red;
    color: white;
    font-size: large;
    padding: 10px;
    border: none;
    :hover{
        cursor: pointer;
        background-color: white;
        color: red;
    }
    `