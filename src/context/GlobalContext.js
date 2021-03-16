import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions : [
        {id : 1, text: 'Food', amount: '-220'},
        {id : 2, text: 'Passive income', amount: '1000'},
        {id : 3, text: 'Car wash', amount: '-40'},
        {id : 4, text: 'Salary', amount: '4000'},
        {id : 5, text: 'Gym', amount: '50'}
    ]
}

export const GlobalContext = createContext(initialState);

// The provider :

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider 
            value={{
                transactions: state.transactions
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}