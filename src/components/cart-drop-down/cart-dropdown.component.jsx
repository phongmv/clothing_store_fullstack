import './cart-dropdown.style.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartDropDown = () => {
    const {setIsCartOpen} = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(prev => !prev);

    return <div onClick={toggleCartOpen} className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
}

export default CartDropDown