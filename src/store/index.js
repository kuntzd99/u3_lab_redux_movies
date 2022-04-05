import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import thunk from 'redux-thunk'
import MovieDetailsReducer from './reducers/MovieDetailsReducer.js'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    movieDetailsState: MovieDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
