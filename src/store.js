import {  combineReducers ,applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer,userReducer,allUsersReducer,driverDetailsReducer } from './reducers/authreducers';
const reducer = combineReducers({
auth:authReducer,
alluser:allUsersReducer,
user: userReducer,
driverdetails:driverDetailsReducer
})

let initialState={}

const middleware=[thunk]
const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;