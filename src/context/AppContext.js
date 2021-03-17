import React, {createContext, useReducer} from 'react'
import AppReducer from './reducers/AppReducer'

const initialState = {
    transactions : [
        {id : 1, text: 'Food', amount: '-220'},
        {id : 2, text: 'Passive income', amount: '1000'},
        {id : 3, text: 'Car wash', amount: '-40'},
        {id : 4, text: 'Salary', amount: '4000'},
        {id : 5, text: 'Gym', amount: '50'}
    ]
}

export const AppContext = createContext(initialState);

// The provider :

export const ContextProvider = ({children}) => {

    const [TransactionState, Transactiondispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider 
            value={{
                transactions: TransactionState.transactions,
                Transactiondispatch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}