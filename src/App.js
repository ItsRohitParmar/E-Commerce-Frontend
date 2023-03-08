import './App.css';
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';
import Home from "./component/Home/Home.js";

import ProductDetails from "./component/Product/ProductDetails.js";

//--- importing and adding ToastContainer in App.js to use alert component in all compoment inside of App.js
import {ToastContainer} from 'react-toastify';

import Products from './component/Product/Products';
import Search from "./component/Product/Search.js";
function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chelanka"],
      }
    })
  }, [])
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/search' element={<Search />} />
        <Route path='/products/:keyword' element={<Products/>} />
      </Routes>
      <Footer />
      <ToastContainer position='bottom-center' theme='dark'/>
    </Router>
  );
}

export default App;
