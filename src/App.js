import React, { Component } from 'react';
// import BuyRequest from './components/BuyRequest'
import BudgetBuilderForm from './components/BudgetBuilder'
import TotalIncome from './components/display/TotalIncome'
import TotalExpenses from './components/display/TotalExpenses'
import TotalLoans from './components/display/TotalLoans'
import ExtraExpenses from './components/display/ExtraExpenses'

class App extends Component {
  render() {
    return(<div className="container">
      <div className="row">
        <h1>My Monthly Budget.</h1>
        <hr />
      </div>
      <div className="col-md-4 col-xs-12 pull-right">
        <TotalIncome />
        <TotalExpenses />
        <TotalLoans />
        <ExtraExpenses />
      </div>
      <div className="col-md-8">
        {/* <h3>What I want to buy:</h3> */}
        {/* <BuyRequest /> */}
        <BudgetBuilderForm />
      </div>
    </div>)
  }
}

export default App;
