import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_CHECKOUT_ADDRESS } from "../constants/cartConstants";

export const addToCart = (id,qty) => async(dispatch,getState) => {
    const { data } = await axios.get(`/api/viewitems/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            itemId: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            qtyInStock: data.qtyInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export const saveCheckoutAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_CHECKOUT_ADDRESS,
        payload: data
    })

    localStorage.setItem('checkoutAddress', JSON.stringify(data))

}