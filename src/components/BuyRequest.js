import React from 'react'

import BasicInput from './inputs/BasicInput'
import MoneyInput from './inputs/MoneyInput'

const BuyRequest = (props) => {
  return(
    <form>
      <BasicInput name="Name:"/>
      <MoneyInput name="Price:" />
      <input type="submit" className="form-control btn-primary"/>
    </form>
  )
}

export default BuyRequest