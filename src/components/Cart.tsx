
interface Props {
    cartItems: string[]
    onClear(): void
}


function Cart({cartItems, onClear} :Props) {

    return (
        <>
            Cart:
            <ul>
                {cartItems.map(item => <li key={item}> {item} </li>)} 
            </ul>

            <button onClick={onClear}> Clear </button>
        </>
    )

}

export default Cart;