import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import SignIn from '../user/signin'
import Register from '../user/register';
import Department from './department-nav';

import SessionContext from '../../context/session/sessioncontext';
import UserContext from '../../context/user/usercontext';


function Header() {

  const sessionContext = useContext(SessionContext);
  const userContext = useContext(UserContext);
  const [isRegisterShow, setIsRegisterShow] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const classDropdownMenu = "dropdown-menu" + (isToggleOn ? " show" : "");

  const { handleLogOut, handleLogIn } = sessionContext;
  const { handleLoginModal } = userContext;


  const handleRegister = () => {
    setIsRegisterShow(true);
  };
    
  const onToggleClick = (e) => {
    e.preventDefault();
    setIsToggleOn(!isToggleOn);
  };

  
  const handleOnLogout = (e) => {
    e.preventDefault();
    setIsToggleOn(!isToggleOn);
    handleLogOut();
  }

    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav header__sign__span">
              <li>
                <span className="navbar-text">Hi!</span>
              </li>
              {sessionContext.isLogin ? (
                <li className="nav-item dropdown nav__item__dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={onToggleClick}
                  >
                    {sessionContext.username}
                  </a>
                  <div
                    className={classDropdownMenu}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="fa fa-shopping-bag" aria-hidden="true" />
                      Mybag
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                      Myprofile
                    </a>
                    <a className="dropdown-item" onClick={handleOnLogout}>
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <span className="navbar-text" onClick={handleLoginModal}>
                      SignIn
                    </span>
                    {userContext.loginModal ? (
                      <SignIn
                        showModel={userContext.loginModal}
                        handleLoginModal={handleLoginModal}
                        handleLogIn={handleLogIn}
                      />
                    ) : null}
                  </li>
                  <li>
                    <span className="navbar-text">or</span>
                  </li>
                  <li>
                    <span className="navbar-text" onClick={handleRegister}>
                      Register
                    </span>
                    {isRegisterShow ? (
                      <Register showModel={isRegisterShow} />
                    ) : null}
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav navbar-center">
              <li className="nav-item">
                <Link className="nav-link" to="/dailydeals">Daily Deals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">Sell</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">Help & Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                {" "}
                <a className="nav-text">
                  {" "}
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                  Your Bag
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-text">0.00</a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Online-Shopping</Link>
            <Department></Department>
            <form className="form-inline navbar-right form__search">
              <input
                className="form-control col-sm-10"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <i className="fa fa-search col-sm-2" aria-hidden="true"></i>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
}

export default Header;
