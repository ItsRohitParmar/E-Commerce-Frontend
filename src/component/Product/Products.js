import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";
import "./Products.css";
import Pagination from "react-js-pagination";
import { Slider, Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

const categories = ["Laptop", "Tv", "SmartWatch", "SmartPhone", "Product"] ;


const Products = () => {

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [price, setprice] = useState([1000, 10000]);
  const [price1, setprice1] = useState([1000, 10000]);

  const [category, setCategory] = useState("");

  const { loading, products, error, resultsPerPage, productsCount, filteredProductsCount } =
    useSelector((state) => state.products);

  // console.log(
  //   "Total Results " + productsCount + " resultPerPage = " + resultsPerPage
  // );


  //Function to Change the page no
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
 


  const setThePrice = ()=>{
    let timer;

    return (newValue)=>{
      // console.log("starting Timer = "+ timer);
      if(timer)
      clearTimeout(timer);

      timer = setTimeout(()=>{
        setprice(newValue);
      }, 1000);
      // console.log("Ending Timer = "+ timer);
    }
  }

  const debouncing = setThePrice();

  const handleChange = (event, newValue, activeThumb) => {
    setprice1(newValue);
    // setprice(newValue);
    debouncing(newValue);
  };

  const { keyword } = useParams();
  
  useEffect(() => {

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category));
  
  }, [dispatch, error, keyword, currentPage, price, category]);

  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              
              value={price1}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              // disableSwap={false}
              min={0}
              max={20000}
            />

            <Typography>Category</Typography>
            <ul className="categoryBox">
              {
                categories.map((category)=>(
                   <li className="category-link" key={category} onClick={()=>setCategory(category)}>{category}</li>
                ))
              }
            </ul>
          </div>

          {resultsPerPage < filteredProductsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultsPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;