import React, { useState, useEffect } from "react";
import { useParams, useHistory} from "react-router-dom";
import Size from './size.js';
import Color from './color.js';
import { fetchData, methodNum } from '../../utils/service.js';

const ProductDetail = ({ location }) => {
    const history = useHistory();
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const _p = location.product;
        if (_p !== undefined)
        {
            setProduct(_p);
            getReview(_p.product_id);
        }
    },[]);
    
    const getReview = async (id) => {
        const resp = await fetchData(`products/${id}/reviews`, methodNum.GET);
        setReviews(resp);
    }
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
                                </div>
                            </article>
                        </aside>
                        <aside className="col-7 col-sm-7">
                        <article className="card-body p-5">
                        <h3 className="title mb-3">{product.name}</h3>
                            <p>
                                <span>{reviews.length} reviews</span>       
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
                                    <dd><Color colors={product.colors} handleColor={location.handleColor}></Color></dd>
                            </dl>
                            <dl className="param param-feature">
                                    <dt>Size</dt>
                                    <dd><Size sizes={product.sizes} handleSize={location.handleSize}></Size></dd>
                            </dl>
                             <hr />
                                <a className="btn btn-lg btn-primary text-uppercase"
                                    onClick={(e) => location.onAddCartClick(product.product_id, e)}>
                                    Add cart
                                </a>
                        </article>
                        </aside>
                    
                </div>
            ) : ""}
            </div>
    );
}
export default ProductDetail;