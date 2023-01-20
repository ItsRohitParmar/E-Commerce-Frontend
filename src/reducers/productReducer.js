import { All_PRODUCT_REQUEST, All_PRODUCT_SUCCESS, All_PRODUCT_FAIL, CLEAR_ERRORS } from "../constants/productConstants"
import { createReducer } from "@reduxjs/toolkit"

const initialState = { 
    products: [],
    loading: false,
    productsCount: 0,
    error:null,
}

export const productReducer = createReducer(initialState, (builder)=> {

    builder.addCase(All_PRODUCT_REQUEST, (state, action)=>{
        state.loading = true;
        state.products = [];
    })

    .addCase(All_PRODUCT_SUCCESS, (state, action)=>{
        state.loading = false;
        state.products = action.payload.products;
        state.productsCount = action.payload.productsCount;
    })

    .addCase(All_PRODUCT_FAIL, (state, action)=>{
        state.loading= false;
                state.products = [];
    })
    
    .addCase(CLEAR_ERRORS, (action, state)=>{
        state.error= null;
    })
})