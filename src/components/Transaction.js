import React,{ useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { deleteTransac } from '../context/actions'

export default function Transaction({transaction}) {

    const { Transactiondispatch } = useContext(AppContext);
    
    const sign = transaction.amount < 0 ? '- ' : '';
    const borderColor = transaction.amount < 0 ? 'minus' : 'plus';
    
    return (
        <li className={borderColor} >
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransac(transaction.id)(Transactiondispatch)} className="delete-btn">x</button>
        </li>
    )
}
