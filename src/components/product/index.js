import React, { useContext, useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import './product.css';
import ProductList from "./list.js";
import ProductDetail from "./detail.js";
import Paging from './paging.js';
import Api from '../../lib/helper/api';


const Product = (props) => {
  //const productContext = useContext(ProductContext);
  //const { products, totalProduct, pages } = productContext;
  const [products, setProducts] = useState([]);
  //const [totalProduct, setTotalProduct] = useState(0);
  const [pages, setPages] = useState(0);
  const { depid, catid, prodid} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (depid !== undefined) {
      getAll(`products/inDepartment/${depid}`);
    }
    else if (catid !== undefined)
    {
      getAll(`products/inCategory/${catid}`);
    }
    else if(depid === undefined && catid === undefined && prodid == undefined) {
      getAll(`products`);
    }
  }, [depid, catid, prodid]);

  const calculatePage = (_totalProduct) => {
    if (_totalProduct > 0) {
      const pageNumber = [];
      const limit = 20;
      const limited = Math.ceil(_totalProduct / limit);
      for (let i = 0; i < limited; i++) {
        pageNumber.push(i);
      }
      setPages(pageNumber);
    }
  }

  const getAll = async (url) => {
    await Api.get(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (resp) {
        const total = resp.count;
       // setTotalProduct(total);
        setProducts(resp.rows);
        calculatePage(total);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="col-12 col-sm-9">
      <Switch>
        <div className="col-12">
          <Route exact path="/" render={(props) => <ProductList products={products} {...props} />} />
          <Route exact path="/department/:depid" render={(props) => <ProductList products={products} {...props} />} />
          <Route exact path="/category/:catid" render={(props) => <ProductList products={products} {...props} />} />
          <Route exact path="/product/:prodid" component={ProductDetail} />
        </div>
      </Switch>
      {/*<div className="col-12 product__paging">
        {pages.length > 0 ? <Paging pages={pages}></Paging> : ""}
      </div>
      <div className="col-12">
        <ProductList products={products}></ProductList>
      </div>
  */}
    </div>
  );
};
export default Product;