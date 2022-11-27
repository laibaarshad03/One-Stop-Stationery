import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { itemListReducer, itemDetailsReducer } from './reducers/itemReducers'

const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer
})
const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools
    (applyMiddleware(...middleware))
)


export default store