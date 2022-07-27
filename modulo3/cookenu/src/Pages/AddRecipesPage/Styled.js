import styled from "styled-components";

export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
    border: 4px solid red;
    border-style: inset;
    align-items: center;
    text-align: center;
    padding: 8px;
    height: 42vh;
    padding-top: 4%;
`
export const PrettyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    align-items: center;
    margin-bottom: 14px;
    gap: 4px;
`
export const PrettyInput = styled.input`
    width: 60vw;
    height: 40px;
    border: 1px solid gray;
    padding-bottom: 4px;
    :hover{
        cursor: pointer;
        border: 1px solid red;
    }
`
export const PrettyButton = styled.button`
    background-color: red;
    color: white;
    font-size: medium;
    padding: 10px;
    border: none;
    :hover{
        cursor: pointer;
        background-color: white;
        color: red;
        border: 2px solid red;
    }
`