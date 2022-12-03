import axios from "axios"
import {
    ITEM_LIST_FAIL,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_REQUEST,
    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL 
} from "../constants/itemConstants" 

export const listItems = () => async (dispatch) => {

    try{
        //console.log('in the actions', category)
        dispatch({ type: ITEM_LIST_REQUEST })

        const { data } = await axios.get('/api/viewitems' )

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.
            response.data.message : error.message,
        })
    }
}

export const listItemDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: ITEM_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/viewitems/${id}`)
        // console.log(data)
        dispatch({
            type: ITEM_DETAILS_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: ITEM_DETAILS_FAIL,
            payload: error.response && error.response.data.message
             ? error.
            response.data.message : error.message,
        })
    }

}

