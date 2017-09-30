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

const Expenses = ({expenses, expenseInputs, handleOtherChange}) => {
  return(
    <div>
      <h3>Expenses:</h3>
      {store.getState().expenses.map(expense => <MoneyInput
        key={expense.name}
        elementID={expense.key}
        name={expense.name}
        func={handleOtherChange}
        />)}
    </div>
  )
}
const mapDispatchToProps = dispatch => (
  {
    handleOtherChange(e) {
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