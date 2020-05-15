import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./detail_.js";
import Api from '../../lib/helper/api';
 
const ProductList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState();
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [review, setReview] = useState([]);
  const [totalReview, setTotalReview] = useState(0);
  const [initalValue, setInitalValue] = useState(0);
  const [finalValue, setFinalValue] = useState(3);
  const [displyReview, setDisplyReview] = useState([]);

  const handleProductDetail = (e) => {
    e.preventDefault();
    setDetail();
    getAttribute(e.target.id);
    getProductDetail(e.target.id);
    getReview(e.target.id);
    setShowModal(true);
  }
  
  const getProductDetail = async (id) => {
      await Api.get(`products/${id}`)
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(function (resp) {
          setDetail(resp);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  const getAttribute = async (_id) => {
    await Api.get(`attributes/inProduct/${_id}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (resp) {
        const _color = resp.filter((r) => { return r.attribute_name === "Color" });
        const _size = resp.filter((r) => { return r.attribute_name === "Size" });
        setSize(_size);
        setColor(_color);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const getReview = async (_id) => {
    await Api.get(`products/${_id}/reviews`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (resp) {
        setReview(resp);
        setTotalReview(resp.length);
        const _slic = resp.slice(initalValue, finalValue);
        setDisplyReview(_slic);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (

    <div className="row">
      {
        props.products.length > 0 &&
        props.products.map((product, index) => (
          <div className="col-md-4">
            <figure className="card card-product">
              <div className="img-wrap"><img src={require(`../../images/${product.thumbnail}`)} /></div>
              <figcaption className="info-wrap">
                <h4 className="title">{product.name}</h4>
                <p className="desc">{product.description}</p>
                <div className="rating-wrap">
                  <div className="label-rating">132 reviews</div>
                  <div className="label-rating">154 orders </div>
                </div>
              </figcaption>
              <div className="bottom-wrap">
                <Link className="btn btn-sm btn-primary float-right" to={"/product/" + product.product_id}>Show Detail</Link>
                <div className="price-wrap h5">
                  {product.discounted_price > 0 ? 
                    <>
                      <del className="price-old">${product.price}</del>
                      <span className="price-new">${product.discounted_price}</span>
                    </>
                    : <span className="price-new">${product.price}</span>
                  }
                </div>
              </div>
            </figure>
          </div>
        ))}
      </div>
    )

};

export default ProductList;
    {/*
    <div classNameName="row product__list">
      {props.products.length > 0 &&
        props.products.map((product, index) => (
          <div classNameName="product__list__item" key={index}>
            <div classNameName="col-lg-12 product__list__item-name" id={product.product_id} onClick={handleProductDetail} >
              {product.name}
            </div>
            {showModal && detail != undefined ? <ProductDetail product={detail} handleClose={handleClose}
              size={size} color={color} review={displyReview}></ProductDetail> : ""}
            <div classNameName="col-lg-12 product__list__item__img">
              <img src={require(`../../images/${product.thumbnail}`)} />
            </div>
            <div classNameName="col-lg-12 product__list__item__price">
              <span
                classNameName={
                  product.discounted_price <= 0
                    ? "col-lg-9 price__left"
                    : "col-lg-9 price__left price__cross"
                }
              >
                {product.price}
              </span>
              <span
                classNameName="col-lg-3 price__discount"
                hidden={product.discounted_price <= 0}
              >
                {product.discounted_price}
              </span>
            </div>
            <div classNameName="col-lg-12 product__list__item__description">
              {product.description}
            </div>
          </div>
        ))}
    </div>
  );
              */}

