import React from "react";
import { Switch, Route } from 'react-router-dom';
import './main.css';
import Category from '../category';
import Product from '../product';


import ProductState from "../../states/product";

const Main = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <Category></Category>
           <Switch>
              <Route exact path="/" component={Product}></Route>
              <Route exact path="/department/:depid" component={Product}></Route>
              <Route exact path="/category/:catid" component={Product}></Route>
              <Route exact path="/product/:prodid" component={Product}></Route>
          </Switch>
        </div>
      </div>
    );
};

export default Main;
