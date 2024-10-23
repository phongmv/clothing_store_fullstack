import './checkout-item.style.scss'
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const { removeItemFromCart, incrementItemFromCart, decrementItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem

    const handleIncrementItem = () => incrementItemFromCart(cartItem)
    const handleDecrementItem = () => decrementItemFromCart(cartItem)
    const handleRemoveItem = () => removeItemFromCart(cartItem)



    return <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span onClick={handleDecrementItem} className="chevron-icon">&#10094;</span>
            <span className="quantity-detail">{quantity}</span>
            <span onClick={handleIncrementItem} className="chevron-icon">&#10095;</span>
        </span>
        <span className="price">${price}</span>
        <div onClick={handleRemoveItem} className="remove-button">&#10005;</div>
    </div>
}

export default CheckoutItem