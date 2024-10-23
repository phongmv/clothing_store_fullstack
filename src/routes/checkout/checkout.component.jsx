import './checkout.style.scss'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import Button from "../../components/button/button.component";

const Checkout = () => {

    const {cartItems, removeItemFromCart, incrementItemFromCart, decrementItemFromCart} = useContext(CartContext)

    return <div>
        <div>
            {cartItems.map((cartItem) => {
                const {name, id, quantity} = cartItem
                return <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <br/>
                    <Button onClick={() => decrementItemFromCart(cartItem)}>decrement</Button>
                    <br/>
                    <Button onClick={() => incrementItemFromCart(cartItem)}>Increment</Button>
                    <br/>
                    <Button onClick={() => removeItemFromCart(cartItem)}>Delete</Button>
                </div>
            })}
        </div>
    </div>
}

export default Checkout