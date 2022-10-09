import { ContainerLi } from "./styled"

function OrderItemCard(props){
    const { pizza, removeFromCart } = props

    return (
        <ContainerLi>
            <p>
                SABOR: {pizza.name}
            </p>
            <p>    
                - {pizza.price.toLocaleString(
                    'pt-br',
                    { styled: 'currency', currency: 'USD'}
                )}
                {" "} x {pizza.quantity}
            </p>
            <button onClick={()=> removeFromCart(pizza)}>REMOVER ITEM</button>
        </ContainerLi>
    )
}
export default OrderItemCard