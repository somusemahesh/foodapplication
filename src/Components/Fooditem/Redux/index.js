import {combineReducers} from 'redux'
import { reducer } from './Reducer';
import { productHistory } from './Reducer';
const rootReducer= combineReducers({
    reducer,
    plist:productHistory,
});
export default rootReducer
