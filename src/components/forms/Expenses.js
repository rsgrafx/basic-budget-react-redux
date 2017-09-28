import React from 'react'
import MoneyInput from '../inputs/MoneyInput'

const Expenses = (props) => {
  return(
    <div>
      <h3>Expenses:</h3>
      <MoneyInput name="Rent / Home Mortage:" />
      <MoneyInput name="Utilties:" />
      <MoneyInput name="Internet/Cable:" />
      <MoneyInput name="Phone Svc:" />
      <MoneyInput name="Food:" />
    </div>
  )
}

export default Expenses