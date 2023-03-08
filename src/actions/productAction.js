import axios from "axios";

import {
    All_PRODUCT_REQUEST,
    All_PRODUCT_SUCCESS,
    All_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants"

// This action fetch all the products for home page (featured product) --------
export const getProduct = (keyword = "", currentPage = 1, price = [1000, 20000], category) => async (dispatch) => {
    try {
        dispatch({ type: All_PRODUCT_REQUEST });

        // console.log(price);
        
        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        
        if (category) {
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }
        
        const { data } = await axios.get(link);

        dispatch({
            type: All_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: All_PRODUCT_FAIL,
            payload: error.response.data,
        })
    }
}

//---- This function fetches all the details of a specific product---------------
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data,
        })
    }
}

//Clearing all error
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}