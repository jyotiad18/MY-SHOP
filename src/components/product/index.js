import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import ShoppingCart from '../shoppingcart';
import ProductList from "./list.js";
import ProductDetail from "./detail.js";
import { fetchData, methodNum } from '../../utils/service.js';


const Product = (props) => {  
  const [products, setProducts] = useState([]);  
  const [pages, setPages] = useState(0);
  const { depid, catid, prodid} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  
  useEffect(() => {
    if (depid !== undefined) {
      getAll(`products/inDepartment/${depid}`);
    }
    else if (catid !== undefined)
    {
      getAll(`products/inCategory/${catid}`);
    }
    else if(depid === undefined && catid === undefined && prodid === undefined) {
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
    var resp = await fetchData(url, methodNum.GET);
    var productData = [];
    await resp.rows.forEach(async(el, i) => {
      const data = await getProductAttributes(el.product_id);
      const colors = data.filter((r) => { return r.attribute_name === "Color" });
      const sizes = data.filter((r) => { return r.attribute_name === "Size" });
      productData.push({
        ...el,
        sizes: sizes,
        colors: colors
      });
      if (i === (resp.rows.length - 1)) {
        setProducts(productData);
      }
    });
  }
  
  const getProductAttributes = async (_id) => {
    return await fetchData(`attributes/inProduct/${_id}`, methodNum.GET);
  }

  return (
    <div className="col-12 col-sm-9">
      <Switch>
        <div className="col-12">
          <Route exact path={["/", "/department/:depid", "/category/:catid"]} render={(props) => <ProductList products={products} {...props} />} />         
          <Route exact path="/product/:prodid" component={ ProductDetail } />
          <Route exact path="/product/cartlist" component={ ShoppingCart }></Route>
        </div>
      </Switch>      
    </div>
  );
};
export default Product;