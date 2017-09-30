import React from 'react'
import MoneyInput from '../inputs/MoneyInput'
import store from '../../store'

const handleChange = (e) => {
  callToStore({name: e.target.id, amount: e.target.value})
}

const callToStore = (data) => {
  store.dispatch({type: "MISC_EXPENSE", payload: data})
}

const MiscExpenses = (props) => {
  return(
    <div>
      <h3>Extra Expenses:</h3>
      {store.getState().misc.map(expense => <MoneyInput
        key={expense.name}
        elementID={expense.key}
        name={expense.name}
        func={handleChange}
        />)}
    </div>
  )
}

export default MiscExpenses