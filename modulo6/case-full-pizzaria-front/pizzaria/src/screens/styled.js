import styled from "styled-components"

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

`
export const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e60000;
 >img{
    width: 300px;
    height: 300px;
  }
`
export const PizzaDiv = styled.div`
  justify-content: center;
  align-items: center;
`
export const ResumeDiv = styled.div`
  justify-content: center;
  align-items: center;
  border:none;
  border-bottom: 1px solid gray;
`
export const ContainerSection = styled.section`
    width: 30em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2%;
    >h4{
        text-align: center;
    }
    >p{
      text-align: center;
      font-size: small;
    }
    >button{
      background-color: white;
      border: none;
      color: red;
    }
    
`
export const PizzaContainerSection = styled.section`
    ul{
        display: flex;
    }
`



