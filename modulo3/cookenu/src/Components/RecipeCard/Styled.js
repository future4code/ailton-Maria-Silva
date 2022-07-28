import styled from "styled-components";



export const RecipeCardContainer = styled.button`
    width: 250px;
    height: 250px;
    border:none;
    background-color:white;
    //box-shadow: 0 4px 4px rgba( 0, 0, 0, 0.4);
    border-bottom-left-radius: 12px solid gray;
    border-top-right-radius: 12px solid gray;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`
export const CardActionArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

`
export const CardImg = styled.img`
    width: 245px;
    height: 160px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
export const CardTitle = styled.p`
    text-align: center;
    font-size: large;
`