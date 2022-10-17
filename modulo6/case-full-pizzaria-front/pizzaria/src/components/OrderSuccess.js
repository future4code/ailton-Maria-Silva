import { SuccessContainerDiv } from "./styled"

function OrderSuccessPopUp(props) {
    const {order, closePopup } = props

    return (
        <SuccessContainerDiv>
            <div>
                <span 
                className= "close-popup"
                onClick={closePopup}> x </span>
                <h2> Pedido realizado com sucesso! </h2>
                <h3> RESUMO DO PEDIDO: </h3>
                <p> ID DO PEDIDO: {order.id} </p>
                {order.pizzas.map((pizza) =>{
                    return(
                        <p key={pizza.name}>
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'pt-br',
                            {style: 'currency', currency: 'USD'}
                        )}
                        {" "} x {pizza.quantity}
                        </p>
                    )
                    
                })}
                <p>
                    TOTAL PAGO: {
                        order.total.toLocaleString(
                            'pt-br',
                            {style: 'currency', currency: 'USD'}
                        )
                    }
                </p>
            </div>
        </SuccessContainerDiv>
    )
}
export default OrderSuccessPopUp;