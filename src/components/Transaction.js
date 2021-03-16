import React from 'react'

export default function Transaction({text, amount}) {
    
    const sign = amount < 0 ? '- ' : ''
    
    return (
        <li className="minus">
            {text} <span>{sign} ${Math.abs(amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
