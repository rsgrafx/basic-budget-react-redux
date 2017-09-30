import {filterAndReAdd} from '../utils/calculator'
export const expenses = (state = [], action) => {
  switch (action.type) {
    case "GET_EXPENSES":
      return state
    case "EXPENSE":
      return filterAndReAdd(state, action.payload)
    default:
      return state
  }
}

export const expense = (state = {}, action) => {
  switch (action.type) {
    case "EXPENSE":
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const misc_expenses = (state = [], action) =>  {
  switch (action.type) {
    case "MISC_EXPENSE":
      return filterAndReAdd(state, action.payload)
    default:
      return state;
  }
}