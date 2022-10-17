import { PizzaContainerLi } from "./styled"

function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <PizzaContainerLi>
            <h3>{pizza.name.toUpperCase()}</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcU9Amfr47HkYUjLS5Pn3oXMs6BwPlVh1PQ&usqp=CAU" alt="uma pizza"/>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <p>
                {pizza.ingredients.map((item) => {
                    return (
                        <p key={item}> {`${item.toUpperCase()} `} </p>
                    )
                })}
            </p>
            <button onClick={() => addToCart(pizza)}>ADICIONAR</button>
        </PizzaContainerLi>
    )
}

export default PizzaCard