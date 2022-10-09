import axios from "axios"
import { PizzaContainerSection } from "./styled"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants"
import PizzaCard from "../components/PizzaCard"

function PizzasMenu(props) {
    const { addToCart } = props

    const [pizzas, setPizzas ] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/pizzas`)
        .then((response)=>{
            setPizzas(response.data.pizzas)
        })
        .catch((error) =>{
            alert(error)
        })
    }, [])
    
    return (
        <PizzaContainerSection>
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
        </PizzaContainerSection>
    )
}
export default PizzasMenu;