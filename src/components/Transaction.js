import React,{ useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Transaction({transaction}) {

    const { deleteTransac } = useContext(AppContext);
    
    const sign = transaction.amount < 0 ? '- ' : '';
    const borderColor = transaction.amount < 0 ? 'minus' : 'plus';
    
    return (
        <li className={borderColor} >
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransac(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
