import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../lib/helper/api";
import "./productdetail.css";

const ProductDetail = (props) => {
    const { prodid } = useParams();
    const [product, setProduct] = useState();
    
    const getProduct = async () => {
        await Api.get(`products/${prodid}`)
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (response) {
                setProduct(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getProduct();
    }, []);
  
    return (
        <div className="card">
            {
                product != undefined ? (
                <div className="row">
                        <aside className="col-5 col-sm-5 border-right">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                    <div><img src={require(`../../images/${product.thumbnail}`)}/></div>
                            </div>
                            <div className="img-small-wrap">
                                    <div className="item-gallery"> <img src={require(`../../images/${product.image}`)} /> </div>
                                    <div className="item-gallery"> <img src={require(`../../images/${product.image_2}`)} /> </div>
                            </div>
                        </article>
                    </aside>
                        <aside className="col-7 col-sm-7">
                        <article className="card-body p-5">
                        <h3 className="title mb-3">{product.name}</h3>
                            <p>
                                    <span>132 reviews</span>       
                            </p>
                            <p className="price-detail-wrap">
                                <span className="price h3 text-warning">
                                        <span className="currency">$</span><span className="num">{product.price}</span>
                                    </span>
                                    <span className="price h3 text-warning">
                                        <span className="currency">$</span><span className="num">{product.discounted_price}</span>
                                    </span>
                            </p>
                            <dl className="item-property">
                                
                                    <dd><p>{product.description}</p></dd>
                            </dl>
                            <dl className="param param-feature">
                                <dt>Color</dt>
                                <dd>Black and white</dd>
                            </dl>
                            <dl className="param param-feature">
                                <dt>Size</dt>
                                <dd>Black and white</dd>
                            </dl>

                             <hr />
                    
                            <a href="#" className="btn btn-lg btn-primary text-uppercase"> Add to cart </a>
                        </article>
                        </aside>
                    
                </div>
            ) : ""}
            </div>
    );
}
export default ProductDetail;