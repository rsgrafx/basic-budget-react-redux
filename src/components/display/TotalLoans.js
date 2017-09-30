import React from 'react'
import {connect} from 'react-redux'
import {total} from  '../../utils/calculator'

const TotalLoans = ({loans, totalLoans}) => {
  return(
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Total Loans:</h4>
        </div>
        <div className="panel-body">
          <ul>
            {loans.map((item) => (<li key={item.name}><b>{item.name}</b> <span className="pull-right">${item.amount}</span></li>))}
          </ul>
          <hr />
          <div> Total: <span className="pull-right">{totalLoans}</span></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({loans: state.loans, totalLoans: total(state.loans)}), null
)(TotalLoans)