import React, { Fragment } from 'react';
import {CgMouse} from "react-icons/cg";
import Product from "./Product.js"
import "./Home.css"

const product = {
    name: "Blue Tshirt",
    images: [{url: "https://www.bing.com/th/id/OIP.pe-Sjx5Bu-_z62RULHFKgwHaJ4?w=146&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"}],
    price: "₹3000",
    _id: "rohitparmar",
};
const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>Scroll <CgMouse/></button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>
        <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
        </div>
    </Fragment>
  )
}

export default Home