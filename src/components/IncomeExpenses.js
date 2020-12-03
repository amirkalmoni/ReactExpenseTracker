import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transactions => transactions.amount)
    const totalIncome = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const totalExpense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{totalExpense}</p>
            </div>
      </div>
    )
}

export default IncomeExpenses