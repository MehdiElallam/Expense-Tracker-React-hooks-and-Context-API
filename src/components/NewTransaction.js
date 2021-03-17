import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { addTransac } from '../context/actions'

export default function NewTransaction() {
    
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ textError, setTextError ] = useState('');
    const [ amountError, setAmountError ] = useState('');

    const { Transactiondispatch, transactions } = useContext(AppContext)

    const addTransaction = (e) => {
        e.preventDefault();

        if(text !== '' && amount !== 0){
            const transaction = {
                id : transactions.length + 1,
                text,
                amount
            }
            addTransac(transaction)(Transactiondispatch)
        }else{
            text === '' ? setTextError('The text field cannot be empty') : setTextError('')
            amount === 0 ? setAmountError('The amount cannot be null') : setAmountError('')
        }
    }


    return (
        <div className="new-transaction">
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={addTransaction}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} id="text" placeholder="Enter text..." />
                    { textError !== '' && (<small style={{color: 'red'}}>{textError}</small>) }
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative for expense, positive for income)
                </label>
                <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} id="amount" placeholder="Enter amount..." />
                { amountError !== '' && (<small style={{color: 'red'}}>{amountError}</small>) }
                </div>
                <button type='submit' className="btn">Add transaction</button>
            </form>  
        </div>
    )
}
