const storeInit = {
  expenses: [{
      name: "Rent / Mortage",
      key: "housing",
      amount: 0
    },
    {
      name: "Utilities",
      key: "utilities",
      amount: 0
    },
    {
      name: "Internet/Cable",
      key: "internet",
      amount: 0
    },
    {
      name: "Phone Svc.",
      key: "phone",
      amount: 0
    },
    {
      name: "Food",
      key: "food",
      amount: 0
    }],
  loans: [
    {
      name: "Higher Purchase (Courts, Manobhai)",
      key: "higher_purchase",
      amount: 0
    },
    {
      name: "Student Loan",
      key: "student_loan",
      amount: 0
    }
  ],
  misc: [
    {
      name: "Entertainment",
      key: "entertainment",
      amount: 0
    },
    {
      name: "Other",
      key: "other",
      amount: 0
    }
  ],
  totals: [{key: 'expenses', amcount: 0}, {key: 'loans', amount: 0}, {key: 'misc', amount: 0}]
}

export default storeInit