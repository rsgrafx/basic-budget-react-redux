import {createStore,
  // applyMiddleWare,
  // compose,
  combineReducers
} from 'redux'
// import thunk from 'redux-thunk'

const expenses = (state = [], action) => {
  return state
}

const income = (state = [], action) => {
  return state
}

const reducer = combineReducers({expenses, income})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer)

export default store