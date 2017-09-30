import React from 'react'
import MoneyInput from '../inputs/MoneyInput'
import {connect} from 'react-redux'
import store from '../../store'
import {newExpense} from '../../actions/expenses'

/*
const handleChange = (e) => {
  store.dispatch(newExpense({name: e.target.id, amount: e.target.value}))
}
*/

const Expenses = ({expenses, expenseInputs, handleChange}) => {
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
const mapDispatchToProps = dispatch => (
  {
    handleChange(e) {
      dispatch(newExpense({name: e.target.id, amount: e.target.value}))
    }
  }
)

/*
state => ({
  expenses: state.expenses
})
*/
export default connect(null, mapDispatchToProps)(Expenses)