import styled from "styled-components"

export const SuccessContainerDiv = styled.div`
    border: 1px solid black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    background-color: white;
    >div{
        position: relative;
        width: 100%;
        height: 100%;
        .close-popup{
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100);
            padding: 2px 5px;
            width: auto;
            :hover{
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`
function OrderSuccessPopUp(props) {
    const {order, closePopUp } = props

    return (
        <SuccessContainerDiv>
            <div>
                <h2> Pedido realizado com sucesso! </h2>
                <h3> Resumo do pedido: </h3>
                <p> Id do pedido: {order.id} </p>
                {order?.pizza.map((pizza) =>{
                    <p>
                        Pizza {pizza.name} {" "}
                    </p>
                })}
            </div>
        </SuccessContainerDiv>
    )
}