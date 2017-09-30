/*jshint -W065 */
import React from 'react'
import {connect} from 'react-redux'
import {total} from  '../../utils/calculator'

const TotalIncome = ({income, totals, totalIncome, totalExpenses, remaining}) => {
  return(
    <div >
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Total Income:</h4>
        </div>
        <div className="panel-body">
          <ul>
            {income.map((item) => (<li key={item.name}><b>{item.name}</b> <span className="pull-right">${item.amount}</span></li>))}
          </ul>
          <hr />
          <div> Total Income: <span className="pull-right text-success">{totalIncome}</span></div>
          <div> Total Expenses: <span className="pull-right text-danger">{totalExpenses}</span></div>
          <div> Remaining: <span className="pull-right text-danger">{remaining}</span></div>
        </div>
      </div>
    </div>
  )
}

const _totalExpenses = (state) => {
  return (total(state.expenses) + total(state.misc) + total(state.loans))
}

export default connect(
  state => ({
    income: state.income,
    totals: state.totals,
    totalIncome: total(state.income),
    totalExpenses: _totalExpenses(state) || 0,
    remaining: (total(state.income) - (_totalExpenses(state) || 0))
  }),
  null
)(TotalIncome)
