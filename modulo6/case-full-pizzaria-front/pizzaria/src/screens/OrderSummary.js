import { ContainerSection } from "./styled"
import OrderItemCard from "../components/OrderItemCard"

function OrderSummary(props){
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>
            <h4>RESUMO DO PEDIDO</h4> 

            {cart.map((pizza)=>{
                return(
                    <OrderItemCard 
                    key={pizza.name} 
                    pizza={pizza}
                    removeFromCart={removeFromCart} />
                )
            })}
            <p>
                TOTAL: {
                total.toLocaleString(
                    'pt-br',
                    {style: 'currency', currency: 'USD'}
                )}
            </p> 

            <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
        </ContainerSection>
    )
};
export default OrderSummary;