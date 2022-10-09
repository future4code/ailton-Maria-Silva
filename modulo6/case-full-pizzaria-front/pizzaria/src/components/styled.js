import styled from "styled-components"

export const SuccessContainerDiv = styled.div`
    align-items: center;
    justify-content: center;
    padding: 4%;
    border: 1px solid black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    background-color: white;
    >div{
        position: relative;
        width: 100%;
        height: 100%;
        .close-popup{
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100);
            padding: 2px 5px;
            width: auto;
            :hover{
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`
export const ContainerLi = styled.li`
    display: flex;
    >button{
        background-color: white;
        color: red;
        border: none;
        font-size: smaller;
    }
`
export const PizzaContainerLi = styled.li`
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3,
    .card-price{
        text-align:center;
    }
    >p{
        font-size: small;
        text-align:center;
    }
    >button{
        background-color: white;
        color: red;
        border: none;
        height: 30px;
    }
    >img{
        height: 200px;
        width: 200px;
    }
`