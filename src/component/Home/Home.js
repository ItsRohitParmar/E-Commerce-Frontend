import React, { Fragment, useEffect } from 'react';

//This is ScrollMouse Icon from react-icons package
import { CgMouse } from "react-icons/cg";

//This is Product Card
import ProductCard from "./ProductCard.js"

import "./Home.css"

//To set Title of webpage using this metadata
import MetaData from '../layout/MetaData.js';

// --- getProduct is a middleware funtion of Action in Redux -----
import { clearErrors, getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"

// --- This is loader Component display content loading-------
import Loader from '../layout/Loader/Loader.js';

// ---importing react-toastify alert to show alert -------------------------
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const dispatch = useDispatch();
    const { loading, products, error } = useSelector(state => state.products)
    
    useEffect(() => {
        if(error) {
            toast.error(error);
            dispatch(clearErrors());
         }
           dispatch(getProduct());
    }, [dispatch, error]);

    return (
        <Fragment>
            {
                loading ? <Loader /> :
                    <Fragment>

                        {/*----- This MetaData is used to set title of webpage tab ------*/}

                        <MetaData title="Ecommerce" />


                        {/* -------- This is home page landing banner ------- */}
                        <div className="banner">
                            <p>Welcome to Ecommerce</p>
                            <h1>FIND AMAZING PRODUCTS BELOW</h1>

                            <a href="#container">
                                <button>Scroll <CgMouse /></button>
                            </a>
                        </div>


                        {/* ------- Featured Products Section ------- */}
                        <h2 className='homeHeading'>Featured Products</h2>
                        <div className="container" id="container">
                            {products &&
                                products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

export default Home