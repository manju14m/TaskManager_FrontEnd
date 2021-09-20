import {combineReducers} from 'redux'

import taskReducer from './TaskReducer'

 const  rootReducer = combineReducers({
    task : taskReducer,
})

export default rootReducer;