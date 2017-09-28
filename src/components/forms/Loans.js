import React from 'react'
import MoneyInput from '../inputs/MoneyInput'

const Loans = (props) => {
  return(
    <div>
      <h3>Loans and Credit Accounts</h3>
      <MoneyInput name="Student Loans:" />
      <MoneyInput name="High Purchase:" />
    </div>
  )

}
export default Loans