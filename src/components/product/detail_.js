import React, { useState, useEffect } from "react";
import Modal from "simple-react-modal";
import Api from '../../lib/helper/api';
import Size from './size.js';
import Color from './color.js';
import Review from './review.js';

const ProductDetail = (props) => {
    const [showModal, setShowModal] = useState(true);
    const [detail, setDetail] = useState(props.product);

    const handleClose = (e) => {
        e.preventDefault();
        props.handleClose();
    }
    return (
        <Modal
            show={showModal}
            style={{ background: "black" }} //overwrites the default background
            transitionSpeed={1000}
            containerClassName="modal__layout__large"
        >
            <div className="modal-content">
                <i className="fa fa-times-circle-o modal-close modal__close" aria-hidden="true" onClick={handleClose} />
                <div className="modal-body modal__body">
                    <div className="row">
                      <div className="col col-lg-4">
                            <div className="col col-lg-12 imglarge__div">
                                <img className="img__large" src={require(`../../images/${detail.thumbnail}`)} />
                            </div>
                            <div className="col col-lg-12 imgsmall__div">
                                <img className="img__small" src={require(`../../images/${detail.image}`)} />
                                <img className="img__small" src={require(`../../images/${detail.image_2}`)} />
                            </div>
                       </div>
                        <div className="col col-lg-8 detail__description">
                            <div className="col col-lg-12">{detail.name}</div>
                            <div className="col col-lg-12">{detail.description}</div>
                            <div className="col-lg-12 product__list__item__price">
                                <span
                                    className={
                                        detail.discounted_price <= 0
                                            ? " price__left"
                                            : " price__left price__cross"
                                    }
                                >
                                    {detail.price}
                                </span>
                                <span
                                    className="price__discount"
                                    hidden={detail.discounted_price <= 0}
                                >
                                    {detail.discounted_price}
                                </span>
                            </div>
                            <Size size={props.size}></Size>
                            <Color color={props.color}></Color>
                            <div className="col-12 product__detail__cart">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Review review={props.review}></Review>
                </div>
            </div>
        </Modal>
    );
}
export default ProductDetail;