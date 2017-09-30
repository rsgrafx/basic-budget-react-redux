// return income.reduce((acc, curr) => acc + Number.parseInt(curr.amount, 0), 0)
export const total = (list) => {
  return list.reduce((acc, curr) => acc + Number.parseInt(curr.amount, 0), 0)
}

export const filterAndReAdd = (state, payload) => {
  let [{name}] = state.filter((expense) => (expense.key === payload.name))
  return state.filter((expense) => (expense.key !== payload.name))
        .concat({key: payload.name, amount: payload.amount, name})
}