import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
export const PrettyInput = styled.input`
    width: 40vw;
    height: 4vh;
    border: 1px solid gray;
    margin-bottom: 4px;
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
export const PrettyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    align-items: center;
    margin-bottom: 14px;
`
export const SignUpButton = styled.button`
    border: none;
    background-color: white;
    color: red;
    font-size: medium;
    :hover{
        cursor: pointer;
        text-decoration: underline red;
    }
`
export const LogoImg = styled.img`
    max-width: 450px;
    max-height: 450px;
`
export const LoadingImg = styled.img`
    width: 20px;
    height: 20px
`