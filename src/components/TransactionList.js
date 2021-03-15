import React from 'react'
import Transaction from './Transaction';

export default function TransactionList() {
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                <Transaction type="Cash" amount="500" />
            </ul>  
        </>
    )
}
