import React from 'react'
import MoneyInput from '../inputs/MoneyInput'

import store from '../../store'

const handleChange = (e) => {
  callToStore({name: e.target.id, amount: e.target.value})
}

const callToStore = (data) => {
  store.dispatch({type: "EXPENSE", payload: data})
}

const Expenses = ({expenseInputs}) => {
  return(
    <div>
      <h3>Expenses:</h3>
      {store.getState().expenses.map(expense => <MoneyInput
        key={expense.name}
        elementID={expense.key}
        name={expense.name}
        func={handleChange}
        />)}
    </div>
  )
}

export default Expenses