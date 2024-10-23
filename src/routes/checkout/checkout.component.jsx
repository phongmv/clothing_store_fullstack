import './checkout.style.scss'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const HEADER_TITLE = ['Product', 'Description', 'Quantity', 'Price', 'Remove']


const Checkout = () => {

    const {cartItems, totalItemsPrice} = useContext(CartContext)

    return <div className="checkout-container">
        <div className="checkout-header">
            {HEADER_TITLE.map((title) => <div className="header-block" key={title}>
                <span>{title}</span>
            </div>)}
        </div>
        {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <span className="total">Total: ${totalItemsPrice}</span>
    </div>
}

export default Checkout