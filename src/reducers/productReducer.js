import {
    All_PRODUCT_REQUEST,
    All_PRODUCT_SUCCESS, 
    All_PRODUCT_FAIL, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS } from "../constants/productConstants"
import { createReducer } from "@reduxjs/toolkit"

const initialState = { 
    loading: false,
    products: [],
    productsCount: 0,
    resultsPerPage: 0,
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
        state.resultsPerPage = action.payload.resultsPerPage;
        state.filteredProductsCount = action.payload.filteredProductsCount;
    })

    .addCase(All_PRODUCT_FAIL, (state, action)=>{
        state.loading = false;
        state.error = action.payload.message;
        state.products = [];
    })
    
    .addCase(CLEAR_ERRORS, (action, state)=>{
        state.error= null;
        return[ ...state, state.error]
    })

    .addDefaultCase((state, action) => {
        state.products = [];
    })

})


// ------- Product Details Reduces

const initialState2 = {
    product: [],
    loading: false,
    error:null,
}

export const productDetailsReducer = createReducer(initialState2, (builder)=> {

    builder.addCase(PRODUCT_DETAILS_REQUEST, (state, action)=>{
        state.loading = true;
    })

    .addCase(PRODUCT_DETAILS_SUCCESS, (state, action)=>{
        state.loading = false;
        state.product = action.payload.product;
    })

    .addCase(PRODUCT_DETAILS_FAIL, (state, action)=>{
        state.loading = false;
        state.error = action.payload.message;
    })
    
    .addCase(CLEAR_ERRORS, (action, state)=>{
        state.error= null;
    })
})