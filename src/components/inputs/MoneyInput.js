import React from 'react'

const MoneyInput = (props) => {
  return(
      <div className="form-group">
        <small>{props.name}</small>
        <label className="sr-only">Amount (in dollars)</label>
        <div className="input-group">
          <div className="input-group-addon">$</div>
          <input
            type="text"
            id={props.elementID}
            className="form-control"
            placeholder="Amount"
            onChange={props.func}
            />
          <div className="input-group-addon">.00</div>
        </div>
      </div>)
}

export default MoneyInput;