import {createContext, useEffect, useReducer} from 'react'
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload} = action
    console.log('user reducer', type)

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, currentUser: payload
            }
        default:
            throw new Error('user reducer handling was not matched!')
    }
}

const INITIAL_USER_VALUE = {
    currentUser: null
}

export const UserContextProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null)
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_USER_VALUE)
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

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

