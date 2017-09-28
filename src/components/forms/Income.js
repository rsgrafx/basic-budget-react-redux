import React from 'react'
import MoneyInput from '../inputs/MoneyInput'

const Income = (form) => {
  return(
    <div>
      <h3>Income:</h3>
      <MoneyInput name="My Income:"/>
      <MoneyInput name="Secondary Income:"/>
    </div>
    )
}

export default Income