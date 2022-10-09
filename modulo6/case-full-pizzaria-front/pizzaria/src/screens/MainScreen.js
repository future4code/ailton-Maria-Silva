import { useEffect, useState } from "react"
import PizzasMenu from "./PizzaMenu"
import OrderSummary from "./OrderSummary"
import { ContainerMain, PizzaDiv, ResumeDiv, ImageDiv } from "./styled"
import axios from "axios"
import { BASE_URL } from "../constants"
import OrderSuccessPopup from "../components/OrderSuccess"

function MainScreen (){
  const [ cart, setCart ] = useState([])
  const [ total, setTotal ] = useState(0)
  
  const [orderSuccessPopupState, setOrderSucessPopupState ] = useState({
    isActive: false,
    summary:{
      id: null,
      pizzas: null,
      total: null
    }
  })
  
  useEffect(()=>{
    calculateTotal()
  }, [cart])

  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex((pizzaInCart)=>{
      return pizzaInCart.name === pizzaToAdd.name
    })
    if(foundIndex >= 0){
      const newCart = [...cart]
      newCart[foundIndex].quantity += 1
      setCart(newCart)
    } else {
      const newCart = [...cart]
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1
      }
      newCart.push(newPizza)
      setCart(newCart)
    }
  }
  const removeFromCart = (pizzaToRemove) =>{
    if(pizzaToRemove > 1){
      const newCart = cart.map((pizza)=>{
        if (pizza.name === pizzaToRemove.name){
          pizza.quantity -= 1
        }
        return pizza
      })
      setCart(newCart)
    } else {
      const newCart = cart.filter((pizza)=>{
        return pizza.name !== pizzaToRemove.name
      })
      setCart(newCart)
    }
  }
  const calculateTotal = () =>{
    const total = cart.reduce(
      (acc, item) => acc + (item.price * item.quantity),
      0
    )
    setTotal(total)
  }

  const confirmOrder = async () =>{
    try{
      const body = {
        pizzas: cart
      }
      const res = await axios.post(`${BASE_URL}/orders`, body)

      setOrderSucessPopupState({
        isActive: true,
        summary: res.data.order
      })
      setCart([])
    } catch (error){
      alert(error)
    }
  }

  const closePopup = () =>{
    setOrderSucessPopupState({
      isActive: false,
      summary:{
        id: null,
        pizzas: null,
        total: null
      }
    })
  }

  return (
    <ContainerMain>
      <ImageDiv>
        <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/4870655-planet-pizza-logo-for-cafe-packaging-and-restaurant-menu-fast-food-logo-with-modern-flat-style-vector-illustration-pizza-slice-logo-for-italian-pizzeria-with-pizzaria-estilo-apartamento-minimalista-gr%C3%A1tis-vetor.jpg" alt="uma pizza"/>
      </ImageDiv>
      <PizzaDiv>
        <PizzasMenu addToCart={addToCart}/>
      </PizzaDiv>
      <ResumeDiv>
          <OrderSummary cart={cart}
          removeFromCart={removeFromCart}
          total={total}
          confirmOrder={confirmOrder}
          />
          { orderSuccessPopupState.isActive
          && <OrderSuccessPopup
          order={orderSuccessPopupState.summary}
          closePopup={closePopup}
          />}
      </ResumeDiv>
      <footer>
        <h4>PLANET PIZZA</h4>
        <p>
          Rua Diavola, n° 345
        </p>
        <p>Vila Romana</p>
        <p>Cidade da Mozzarela</p>
      </footer>
    </ContainerMain>
  )
};
export default MainScreen;