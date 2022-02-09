import { createStore, applyMiddleware } from 'redux' // create store
import thunk from 'redux-thunk' //

// composeWithDevTools Make our redux extension to work
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// Importing reducers and use inside our store
import rootReducer from './reducers'

const middleware = [thunk]
const initialState = {}

// Here we supply our reducers
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
