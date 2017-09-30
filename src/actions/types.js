const actions = {
  GET_EXPENSES: "GET_EXPENSES",
  EXPENSE: "EXPENSE",
  MISC_EXPENSE: "MISC_EXPENSE"
}

const income = {
  INCOME: "INCOME"
}

const loans = {
  ADD_LOAN: "ADD_LOAN"
}

const totals = {
  ADD_TOTAL_EXPENSE: "ADD_TOTAL_EXPENSE",
  GET_ALL_TOTALS: "GET_ALL_TOTALS"
}
export default {...actions, ...income, ...loans, ...totals}