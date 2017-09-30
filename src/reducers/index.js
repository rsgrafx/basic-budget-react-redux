import {
  combineReducers
} from 'redux'

import {expenses, expense, misc_expenses as misc} from './expenses'
import {filterAndReAdd} from '../utils/calculator'
import Do from  '../actions/types'

const income = (state = [], action) => {
  if (action.type === Do.INCOME) {
    const [key] = Object.keys(action.payload)
    return state.filter((item) => item.name !== key).concat({name: key, amount: action.payload[key]})
  } else {
    return state
  }
}

const loans = (state = [], action) => {
  switch (action.type) {
    case Do.ADD_LOAN:
      return filterAndReAdd(state, action.payload)
    default:
      return state;
  }
}

const currentIncome = (state = {}, action) => {
  switch (action.type) {
    case Do.INCOME:
      return {...state, ...action.payload}
    default:
      return state
  }
}

const wishlist = (state = [], action) => {
  return state
}

const item = (state = {}, action) => {
  switch (action.type) {
    case "ITEM":
      return {...state, ...action.payload}
    default:
      return state
  }
}

const totals = (state = [], action) => {
  switch (action.type) {
    case Do.ADD_TOTAL_EXPENSE:
      return filterAndReAdd(state, action.payload)
    case Do.GET_ALL_TOTALS:
      return state
    default:
      return state
  }
}

const reducer = combineReducers({
  totals,
  misc,
  loans,
  expense,
  expenses,
  income,
  wishlist,
  item,
  currentIncome})

export default reducer