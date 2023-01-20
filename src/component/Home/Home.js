import React, { Fragment, useEffect } from 'react';

//This is ScrollMouse Icon from react-icons package
import { CgMouse } from "react-icons/cg";

//This is Product Card
import Product from "./Product.js"
import "./Home.css"

//To set Title of webpage using this metadata
import MetaData from '../layout/MetaData.js';

import { getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux"
import Loader from '../layout/Loader/Loader.js';


const Home = () => {

    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])

    return (
        <Fragment>
            {
                loading ? <Loader/>:
                <Fragment>
            <MetaData title="Ecommerce" />
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>

                <a href="#container">
                    <button>Scroll <CgMouse /></button>
                </a>
            </div>
            {
                console.log(products)
            }
            <h2 className='homeHeading'>Featured Products</h2>
            <div className="container" id="container">
                {products &&
                    products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
            </div>
        </Fragment>
            }
        </Fragment>
    )
}

export default Home