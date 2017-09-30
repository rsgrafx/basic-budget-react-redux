import React from 'react'
import {connect} from 'react-redux'
import {total} from  '../../utils/calculator'

const TotalExpenses = ({expenses, total_expenses}) => {
  return(
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Total Expenses:</h4>
        </div>
        <div className="panel-body">
          <ul>
            {expenses.map((item) => (<li key={item.name}><b>{item.name}</b> <span className="pull-right">${item.amount}</span></li>))}
          </ul>
          <hr />
          <div> Total: <span className="pull-right">{total_expenses}</span></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({expenses: state.expenses, total_expenses: total(state.expenses)}),
  null
)(TotalExpenses)

