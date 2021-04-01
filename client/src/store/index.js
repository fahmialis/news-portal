import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'


const store = createStore(reducer, applyMiddleware(logger,thunk))

export default store