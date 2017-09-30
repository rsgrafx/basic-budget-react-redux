import {createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import reducer from  '../reducers'
import storeInit from './base'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer, storeInit,
  composeEnhancers(applyMiddleware(thunk))

)

export default store