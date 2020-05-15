import React from 'react';
import { Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

import Help from './components/help';

import SessionState from "./context/session/sessionstate.js";
import UserState from "./context/user/userstate.js";
import DepartmentState from './states/department';
import CategoryState from "./states/category";


function App() {
  return (
    <>
      <SessionState>
        <UserState>
          <DepartmentState>
            <CategoryState>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/department/:depid" component={Main} />
                <Route exact path="/category/:catid" component={Main} />
                <Route exact path="/product/:prodid" component={Main} />
                <Route exact path="/help" component={Help} />
              </Switch>
            </CategoryState>
          </DepartmentState>
        </UserState>
      </SessionState>
      <Footer></Footer>
    </>
  );
}

export default App;
