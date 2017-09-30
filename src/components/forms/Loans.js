import React from 'react'
import MoneyInput from '../inputs/MoneyInput'
import store from '../../store'

const handleChange = (e) => {
  callToStore({name: e.target.id, amount: e.target.value})
}

const callToStore = (data) => {
  store.dispatch({type: "ADD_LOAN", payload: data})
}

const Loans = (props) => {
  return(
    <div>
      <h3>Loans and Credit Accounts</h3>
      {store.getState().loans.map(loan => <MoneyInput
        key={loan.name}
        elementID={loan.key}
        name={loan.name}
        func={handleChange}
      />)}
    </div>
  )

}
export default Loans