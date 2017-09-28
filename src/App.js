import React, { Component } from 'react';
import BuyRequest from './components/BuyRequest'
import BudgetBuilderForm from './components/BudgetBuilder'

class App extends Component {
  render() {
    return(<div className="container">
      <h1>My Monthly Budget.</h1>
      <hr />
      <div className="col-md-8">
        <h3>What I want to buy:</h3>
        <BuyRequest />
        <h3>My Budget</h3>
        <BudgetBuilderForm />
      </div>
    </div>)
  }
}

export default App;
