import styled from "styled-components"

export const PizzaContainerLi = styled.li`
    border: 1px sloid black;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3,
    .card-price{
        text-align:center;
    }
`
function PizzaCard(props){
    const {pizza, addToCart} = props

    return (
        <PizzaContainerLi>
            <h3>{pizza.name}</h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    {style: 'currency', currency: 'USD'}
                )}
            </p>
            <p>
                {pizza.ingredients.map((item) =>{
                    return(
                        <span key={item}>{`${item}`}</span>
                    )
                })}
            </p>
            <button onClick={()=> addToCart(pizza)}>Adicionar no carrinho</button>
        </PizzaContainerLi>
    )
}
export default PizzaCard