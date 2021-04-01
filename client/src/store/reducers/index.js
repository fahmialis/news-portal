import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import editorsReducer from './editorsReducer'
import favouritesReducer from './favouritesReducer'

const reducer = combineReducers({
  news: newsReducer,
  editors: editorsReducer,
  favourites: favouritesReducer
})

export default reducer