import React from 'react'

import Expenses from './forms/Expenses'
import Income from './forms/Income'
import MiscExpenses from './forms/MiscExpenses'
import Loans from './forms/Loans'

const BudgetBuilderForm = (props) => {
  return(
    <div>
      <form>
      <Income />
      <button className="btn-filled btn-danger">Add Income </button>
      <Expenses />
      <button className="btn-filled btn-danger">Add Expense </button>
      <Loans />
      <button className="btn-filled btn-danger">Add Loan </button>
      <MiscExpenses />
      <button className="btn-filled btn-danger">Add Misc Expense </button>
      </form>
    </div>
  )
}

export default BudgetBuilderForm
