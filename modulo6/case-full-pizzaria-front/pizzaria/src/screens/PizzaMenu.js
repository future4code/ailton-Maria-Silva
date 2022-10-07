import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants"
import PizzaCard from "../components/PizzaCard"

export const ContainerSection = styled.section`
    ul{
        display: flex;
    }
`
export const PizzaCard = styled.div`

`
function PizzasMenu(props) {
    const { addCart } = props

    const [pizzas, setPizzas ] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/pizzas`)
        .then((response)=>{
            setPizzas(response.data.pizzas)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])
    
    return (
        <ContainerSection>
            <ul>
                {pizzas.map((pizza)=>{
                    return(
                        <PizzaCard
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </ul>
        </ContainerSection>
    )
}
export default PizzasMenu;