import React from 'react'

const MoneyInput = (props) => {
  return(
      <div className="form-group">
        <small>{props.name}</small>
        <label className="sr-only">Amount (in dollars)</label>
        <div className="input-group">
          <div className="input-group-addon">$</div>
          <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
          <div className="input-group-addon">.00</div>
        </div>
      </div>)
}

export default MoneyInput;