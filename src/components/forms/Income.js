import React from 'react'
import MoneyInput from '../inputs/MoneyInput'
import store from '../../store'

const handleChange = (e) => {
  callToStore({[e.target.id] : e.target.value})
}

const callToStore = (data) => {
  store.dispatch({type: "INCOME", payload: data})
}

const Income = (form) => {
  return(
    <div>
      <h3>Income:</h3>
      <MoneyInput
        name="My Income:"
        elementID={'primary'}
        func={handleChange}
        />
      <MoneyInput
        name="Secondary Income:"
        elementID={'secondary'}
        func={handleChange}
        />
    </div>
    )
}

export default Income