import {createContext, useEffect, useState} from 'react'
import {SHOP_DATA} from '../shop-data.js'
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.util";

export const ProductsContext = createContext({
    products: {}
})


export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState({})

    useEffect( async () => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments()
            setProducts({...categories})
        }
        await getCategoriesMap()
    }, []);


    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}