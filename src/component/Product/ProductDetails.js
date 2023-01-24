import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

// import Carousel from 'react-material-ui-carousel';

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { product, loading, error} = useSelector(state => state.productDetails);

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);
    
  return (
    <Fragment>
        <div className="ProductDetails">
            <div>
                <Carousel fade> 
                    {
                        product.image && product.image.map((item, i)=> (
                            <Carousel.Item key={item}>
                            <img
                              className="CarouselImage" 
                              key={item.url}
                              src={item.url} 
                              alt={`${i} Slide`} />
                              </Carousel.Item>
                        )) 
                    }
                    {/* <img className="CarouselImage" src="https://images.bewakoof.com/t1080/men-s-black-uchiha-obito-oversized-t-shirt-570988-1674203414-1.jpg" alt="a" />
                    <img className="CarouselImage" src="https://images.bewakoof.com/t1080/men-s-black-uchiha-obito-oversized-t-shirt-570988-1674203414-1.jpg" alt="a" /> */}
                </Carousel>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetails