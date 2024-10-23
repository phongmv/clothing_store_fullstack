import {createContext, useEffect, useState} from "react";

const MAX_ITEM = 99
const MIN_ITEM = 1

const addCartItem = (cartItems, productToAdd) => {
    const existedItem = cartItems.find((item) => item.id === productToAdd.id)

    if (existedItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, removedItem) => {
    return cartItems.filter(item => item.id !== removedItem.id)
}

const incrementItem = (cartItems, item) => {
    const incrementItemIndex = cartItems.findIndex((itemFromCart) => itemFromCart.id === item.id)
    if(incrementItemIndex !== -1 && cartItems[incrementItemIndex].quantity < MAX_ITEM){
        cartItems[incrementItemIndex].quantity += 1
    }
    return [...cartItems]
}

const decrementItem = (cartItems, item) => {
    const decrementItemIndex = cartItems.findIndex((itemFromCart) => itemFromCart.id === item.id)
    if(decrementItemIndex !== -1 && cartItems[decrementItemIndex].quantity > MIN_ITEM){
        cartItems[decrementItemIndex].quantity -= 1
    }
    return [...cartItems]
}

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    itemsCount: 0,
    totalItemsPrice: 0,
    setIsCartOpen: () => {},
    addItemToCart: () => [],
    removeItemFromCart: () => [],
    incrementItemFromCart: () => [],
    decrementItemFromCart: () => []
});

export const CartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0)
    const [totalItemsPrice, setTotalItemsPrice] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (removedItem) => {
        setCartItems(removeCartItem(cartItems, removedItem))
    }

    const incrementItemFromCart = (item) => {
        setCartItems(incrementItem(cartItems, item))
    }

    const decrementItemFromCart = (item) => {
        setCartItems(decrementItem(cartItems, item))
    }

    useEffect(() => {
        const totalCartItem = cartItems.reduce((sum, curr) => sum + curr.quantity, 0)
        const totalPrice =  cartItems.reduce((sum, curr) => sum + curr.quantity * curr.price, 0)

        setItemsCount(totalCartItem)
        setTotalItemsPrice(totalPrice)

    }, [cartItems])

    const value = {
        isCartOpen,
        cartItems,
        itemsCount,
        setIsCartOpen,
        totalItemsPrice,
        addItemToCart,
        removeItemFromCart,
        incrementItemFromCart,
        decrementItemFromCart
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
