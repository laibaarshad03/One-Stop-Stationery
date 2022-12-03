import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_CHECKOUT_ADDRESS } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: [], checkoutAddress:{} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => 
                x.itemId === item.itemId)
            if (existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x =>
                       x.itemId === existItem.itemId ? item: x)
                }

            }else{ //if item doesnt exist add in cartitems
                return{
                    ...state,
                    cartItems: [...state.cartItems,item]
                }
            }
        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.itemId !== action.payload,
                )
            }
        case CART_SAVE_CHECKOUT_ADDRESS:
            return {
                ...state,
                checkoutAddress: action.payload,
            }
        default:
            return state
    }
}
