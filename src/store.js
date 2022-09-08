import logger from 'redux-logger'
import {createStore} from 'redux'
import { applyMiddleware } from 'redux';
// import { reducer } from './Components/Fooditem/Redux/Reducer'
import rootReducer from './Components/Fooditem/Redux/index'
const middlewares = [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares))
            
