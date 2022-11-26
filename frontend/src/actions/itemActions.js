import axios from "axios"
import {
    ITEM_LIST_FAIL,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_REQUEST 
} from "../constants/itemConstants" 

export const listItems = () => async (dispatch) => {
    try{
        dispatch({ type: ITEM_LIST_REQUEST })

        const { data } = await axios.get('/api/viewitems')

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.
            response.data.message : error.message,
        })
    }

}