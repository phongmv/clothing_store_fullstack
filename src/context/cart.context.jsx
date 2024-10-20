import {createContext, useEffect, useState} from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existedItem = cartItems.find((item) => item.id === productToAdd.id)

    if(existedItem) {
       return cartItems.map((cartItem) => cartItem.id === productToAdd.id
               ? {...cartItem, quantity: cartItem.quantity + 1}
               : cartItem
       )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext  = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    addItemToCart: () => [],
    cartItems: [],
    itemsCount: 0
});

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0)

    const addItemToCart = (productToAdd) => {
       setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const totalCartItem = cartItems.reduce((sum, curr) => {
            return sum + curr.quantity
        }, 0)

        setItemsCount(totalCartItem)
    }, [cartItems])

    const value = {isCartOpen, setIsCartOpen,cartItems, addItemToCart, itemsCount}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
