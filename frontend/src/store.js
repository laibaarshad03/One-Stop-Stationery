import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { itemListReducer, itemDetailsReducer } from './reducers/itemReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
    cart: cartReducer
})

//if found in localstorage then save in array else an empty array
const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools
    (applyMiddleware(...middleware))
)


export default store