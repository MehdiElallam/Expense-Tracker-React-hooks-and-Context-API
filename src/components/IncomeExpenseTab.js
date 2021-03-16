import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext';

export default function IncomeExpenseTab() {

    const { transactions } = useContext(AppContext);
    const income = transactions.map(tr => tr.amount )
                            .filter(amount => amount > 0)
                            .reduce((a,b) => parseInt(a) + parseInt(b), 0);
    const expense = transactions.map(tr => tr.amount )
                            .filter(amount => amount < 0)
                            .reduce((a,b) => parseInt(a) + parseInt(b), 0);
    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
