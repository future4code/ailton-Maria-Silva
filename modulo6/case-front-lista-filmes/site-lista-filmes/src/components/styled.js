import styled from "styled-components"

export const HeaderDiv = styled.header`
    align-items: center;
    justify-content: space-between;
`
export const TinyDiv = styled.div`
    display: flex;
    align-items: center;
    color: white;
    background-color: #5C16C5;
    width: 1440px;
    height: 56px;
    left: 0px;
    top: 0px;
    >h2{
        color:white;
    }
`
export const ButtonTMDB = styled.button`
    background-color: #5C16C5;
    color: white;
    border: none;
    margin-left: 4%;
    font-size: large;
    :hover{
        background-color: white;
        color: #5C16C5;
    }
`