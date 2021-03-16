import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Balance() {

    const { transactions } = useContext(AppContext
        );
    const total = transactions.map(tr => tr.amount).reduce((a,b) => parseInt(a) + parseInt(b) , 0)
    console.log(total)
    return (
        <>
            <h4 style={{textAlign: 'center'}}>Your Balance</h4>
            <h1 style={{textAlign: 'center'}} id="balance">${total}</h1>
        </>
    )
}
