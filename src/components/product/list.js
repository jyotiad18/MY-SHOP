import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SessionContext from "../../context/session/sessioncontext";
import Paging from './paging.js';
import Size from './size.js';
import Color from './color.js';
import { fetchData, methodNum } from '../../utils/service.js';
 
const ProductList = ({ products }) => {
  const initalAttribute = {
    color: "",
    size: ""
  };
    
  const { handleAddShopping } = useContext(SessionContext);  
  const [attribute, setAttribute] = useState(initalAttribute);    
   
  const handleSize = (e) => {  
    setAttribute({
      ...attribute,
      size: e.target.id
    });
  };
  const handleColor = (e) => { 
    setAttribute({
      ...attribute,
      color: e.target.id
    });
  };

  const onAddCartClick = (prodid, e) => {
    if (attribute.color === "" || attribute.size === "") {
      alert('Select Color && Size');
      return;
    }
    const cart = {
      cart_id: localStorage.getItem('cartId'),
      product_id: prodid,
      attributes: attribute.color + "," + attribute.size
    }
    handleAddShopping(cart);   
  }

  return (
    <div className="row">
      <Paging></Paging>
      {
        products.length > 0 &&
        products.map((product, index) => (
          <div className="col-sm-4">
            <div className="card card-product">
            <img className="card-img-top img-wrap" src={require(`../../images/${product.thumbnail}`)} alt={product.name}></img>
            <div className="card-body card-product-detail">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text card-product-detail-desc">{product.description}</p>
                <div className="rating-wrap1">
                  <div className="label-rating">132 reviews</div>
                  <div className="label-rating">154 orders </div>
                </div>
                <div className="price-wrap1">
                  {product.discounted_price > 0 ?
                    <>
                      <del className="price-old">${product.price}</del>
                      <span className="price-new">${product.discounted_price}</span>
                    </>
                    : <span className="price-new">${product.price}</span>
                  }
                </div>
                <div className="price-wrap1">
                  <Size sizes={product.sizes} handleSize={handleSize}></Size>
                </div>
                <div className="price-wrap1">
                  <Color colors={product.colors} handleColor={handleColor}></Color>
                </div>
            </div>
              <div class="card-footer text-muted float-right card-product-footer">
                <Link className="btn btn-sm btn-primary"                 
                  to={{
                    pathname: "/product/" + product.product_id,
                    product,
                    handleSize,
                    handleColor,
                    onAddCartClick
                  }}
                    >
                    Detail
                </Link>
                <span className="btn btn-sm btn-primary" onClick={(e) => onAddCartClick(product.product_id, e)}>Add cart</span>
                <span className="btn btn-sm btn-primary">Add wish</span>
            </div>
            </div>
          </div>       
        ))}
      </div>
    )

};

export default ProductList;   

