import React from 'react'

export default function Transaction(props) {
    
    return (
        <li className="minus">
            {props.type} <span>-${props.amount}</span><button className="delete-btn">x</button>
        </li>
    )
}
