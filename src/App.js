import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

import Help from './components/help';
import SignIn from './components/signin';
import Register from './components/register';
import UserDetail from './components/userprofile/detail.js'

import SessionState from "./context/session/sessionstate.js";
import UserState from "./context/user/userstate.js";
import DepartmentState from './states/department';

function App() {
  return (
    <>
      <SessionState>
        <UserState>
          <DepartmentState>           
              <Header></Header>
              <Switch>
              <Route exact path={["/", "/department/:depid", "/category/:catid", "/product/:prodid"]} component={Main} />              
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/profile" component={UserDetail} />
              </Switch>         
          </DepartmentState>
        </UserState>
      </SessionState>
      <Footer></Footer>
    </>
  );
}

export default App;
