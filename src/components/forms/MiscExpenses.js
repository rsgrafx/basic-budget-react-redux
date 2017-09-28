import React from 'react'
import MoneyInput from '../inputs/MoneyInput'

const MiscExpenses = (props) => {
  return(
    <div>
      <h3>Extra Expenses:</h3>
      <MoneyInput name="Social/Entertainment" />
      <MoneyInput name="Other:" />
    </div>
  )
}

export default MiscExpenses