import React, { useContext } from 'react'
import Transaction from './Transaction';
import { AppContext } from '../context/AppContext'

export default function TransactionList() {
    
    const { transactions } = useContext(AppContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
                
            </ul>  
        </>
    )
}
