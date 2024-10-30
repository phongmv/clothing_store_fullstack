import {createContext, useEffect, useReducer, useState} from "react";

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

export const CART_ACTION_TYPES = {
    SET_CART_IS_OPEN: 'SET_CART_IS_OPEN',
    SET_NEW_CART: 'SET_NEW_CART'
}


const INITIAL_CART_VALUE = {
    isCartOpen: false,
    cartItems: [],
    itemsCount: 0,
    totalItemsPrice: 0
}

const cartReducer = (state, action) => {
    const {type, payload}  = action

    switch (type) {
        case  CART_ACTION_TYPES.SET_NEW_CART:
            return {
                ...state, ...payload
            }
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
               ...state, isCartOpen: payload,
            }
        default:
            throw new Error('Handling is failed!')
    }
}

export const CartContextProvider = ({children}) => {
    const  [{cartItems, itemsCount, isCartOpen,totalItemsPrice}, dispatch] = useReducer(cartReducer,INITIAL_CART_VALUE)

    const updateNewCartValue = (newCartItems) => {

        const newTotalCartItem = newCartItems.reduce((sum, curr) => sum + curr.quantity, 0)
        const newTotalPrice =  newCartItems.reduce((sum, curr) => sum + curr.quantity * curr.price, 0)

        dispatch({type: CART_ACTION_TYPES.SET_NEW_CART, payload: {
                cartItems: newCartItems,
                itemsCount: newTotalCartItem,
                totalItemsPrice: newTotalPrice,
            }})
    }

    const addItemToCart = (productToAdd) => {
           const newCartItems = addCartItem(cartItems, productToAdd)
            updateNewCartValue(newCartItems)
    }

    const removeItemFromCart = (removedItem) => {
        const newCartItems = removeCartItem(cartItems, removedItem)
        updateNewCartValue(newCartItems)
    }

    const incrementItemFromCart = (item) => {
        const newCartItems = incrementItem(cartItems, item)
        updateNewCartValue(newCartItems)
    }

    const decrementItemFromCart = (item) => {
       const newCartItems  = decrementItem(cartItems, item)
        updateNewCartValue(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch({type: CART_ACTION_TYPES.SET_CART_IS_OPEN, payload: bool})
    }

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
