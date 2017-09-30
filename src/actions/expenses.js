import Do from './types'

export const getExpenses = () => {
  return {
    type: Do.GET_EXPENSES
  }
}

export const newExpense = (data) => {
  return {type: Do.EXPENSE, payload: data}
}
