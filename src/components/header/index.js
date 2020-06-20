import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Department from '../department';
import SessionContext from '../../context/session/sessioncontext';

const Header = ()  => {
  const sessionContext = useContext(SessionContext); 
  const [isToggleOn, setIsToggleOn] = useState(false);
  const classDropdownMenu = "dropdown-menu" + (isToggleOn ? " show" : "");
  const { handleLogOut, totalAmount, totalProduct, isLogin, username } = sessionContext;
       
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
        <nav className="navbar navbar-expand-sm bg-light navbar-light navbar__top navbar-fixed-top">
          <div className="container-fluid">
            <ul className="navbar-nav header__sign__span">
              <li>
                <span className="navbar-text">Hi!</span>
              </li>
              {isLogin ? (
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
                    {username}
                  </a>
                  <div
                    className={classDropdownMenu}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="fa fa-shopping-bag" aria-hidden="true" />
                      Mybag
                    </a>
                    <a className="dropdown-item" href="/profile">
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
                    <Link to="/login" className="navbar-text navbar__top__link">
                      SignIn
                    </Link>
                  </li>
                  <li>
                    <span className="navbar-text navbar__top__link"> or </span>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="navbar-text navbar__top__link"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav navbar-center">
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/dailydeals">
                  Daily Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">
                  Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Help & Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a href="/product/cartlist" className="nav-text">
                  <span className="fa-stack fa-1x">
                    <i className="fa fa-shopping-cart fa-stack-2x"></i>
                    {totalProduct > 0 ? 
                      <span className="badge">{totalProduct}</span>
                    :""
                    }
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-text">$ {totalAmount}</a>
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

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Online-Shopping
            </Link>
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
