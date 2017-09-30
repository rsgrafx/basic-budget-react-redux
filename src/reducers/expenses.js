import {filterAndReAdd} from '../utils/calculator'
import Do from '../actions/types'

export const expenses = (state = [], action) => {
  switch (action.type) {
    case Do.GET_EXPENSES:
      return state
    case Do.EXPENSE:
      return filterAndReAdd(state, action.payload)
    default:
      return state
  }
}

export const expense = (state = {}, action) => {
  switch (action.type) {
    case Do.EXPENSE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const misc_expenses = (state = [], action) =>  {
  switch (action.type) {
    case Do.MISC_EXPENSE:
      return filterAndReAdd(state, action.payload)
    default:
      return state;
  }
}