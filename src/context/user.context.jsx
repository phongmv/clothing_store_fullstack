import {createContext, useEffect, useState} from 'react'
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if(user){
                setCurrentUser(user)
               await createUserDocumentFromAuth(user)
            }
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

