import React from "react";
import { Switch, Route } from 'react-router-dom';
import Category from '../category';
import Product from '../product';

const Main = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <Category></Category>
          <Switch>           
            <Route exact path={["/", "/department/:depid", "/category/:catid", "/product/:prodid"]} component={Product}></Route>            
          </Switch>
        </div>
      </div>
    );
};

export default Main;
