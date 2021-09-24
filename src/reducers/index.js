import {combineReducers} from 'redux'

import taskReducer from './TaskReducer'
import authReducer from './AuthReducer';

 const  rootReducer = combineReducers({
    task : taskReducer,
    auth:authReducer
})

export default rootReducer;