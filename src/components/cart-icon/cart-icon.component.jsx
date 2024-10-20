import './cart-icon.style.scss'
import {ReactComponent as ShoppingCartIcon} from "../../assets/images/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {

    const {setIsCartOpen} = useContext(CartContext)

    const toggleCartOpen = () => setIsCartOpen(prev => !prev)
    return <div onClick={toggleCartOpen} className="cart-icon-container">
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">0</span>
    </div>
}

export default CartIcon;