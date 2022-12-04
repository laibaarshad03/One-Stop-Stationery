import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { itemListReducer, itemDetailsReducer } from './reducers/itemReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer, 
})

//if found in localstorage then save in array else an empty array
const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const checkoutAddressFromStorage = localStorage.getItem('checkoutAddress') ? 
JSON.parse(localStorage.getItem('checkoutAddress')) : {}

const initialState = {
    userLogin: { 
        userInfo: userInfoFromStorage
    },
    cart: { 
        cartItems: cartItemsFromStorage,
        checkoutAddress: checkoutAddressFromStorage
     },

}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools
    (applyMiddleware(...middleware))
)


export default store