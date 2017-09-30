import React from 'react'
import {connect} from 'react-redux'
import {total} from '../../utils/calculator'

const ExtraExpenses = ({misc, total_spent}) => {
  return(
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Total Misc Expenses:</h4>
        </div>
        <div className="panel-body">
          <ul>
            {misc.map((item) => (<li key={item.name}><b>{item.name}</b> <span className="pull-right">${item.amount}</span></li>))}
          </ul>
          <hr />
          <div> Total: <span className="pull-right">{total_spent}</span></div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({misc: state.misc, total_spent: total(state.misc)}),
  null
  )(ExtraExpenses)