import './cart-dropdown.style.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";
import {useNavigate} from "react-router-dom";

const CartDropDown = () => {
    const {setIsCartOpen, cartItems} = useContext(CartContext);
    const navigate = useNavigate()

    const gotoCheckoutHandler = () => {
        navigate("/checkout")
    }
    const toggleCartOpen = () => setIsCartOpen(prev => !prev);

    return <div onClick={toggleCartOpen} className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/> )}
        </div>
        <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
}

export default CartDropDown