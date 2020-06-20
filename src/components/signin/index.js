import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import SessionContext from "../../context/session/sessioncontext";
import { fetchData, methodNum } from '../../utils/service.js';

const SignIn = () => {  
    const history = useHistory();
    const initialLoginUser = {
        email: "adminfr@admin.com",
        password: "adminfr",
    };
    const { handleLogIn } = useContext(SessionContext);
    const [user, setUser] = useState(initialLoginUser);

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const setSession = (r) => {
      sessionStorage.setItem('customer', r.customer);
      sessionStorage.setItem("token", r.accessToken);
      sessionStorage.setItem("username", r.customer.name);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "customers/login";
      var resp = await fetchData(url, methodNum.POST, user);
      if (resp)
      {
        setSession(resp); 
        handleLogIn();
        history.push("/");
      }   
    };
    
    return (
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center"></h2>
              <div className="text-center social-btn">
                <a href="#" className="btn btn-primary btn-block">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn btn-info btn-block">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-danger btn-block">
                  <i className="fa fa-google"></i>
                </a>
              </div>
              <div className="or-seperator">
                <i>or</i>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email or username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={user.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={user.password}
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-block login-btn"
                >
                  Sign in
                </button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="pull-right text-success">
                  Forgot Password?
                </a>
              </div>
            </form>
            <div className="hint-text small">
              Don't have an account?{" "}
              <a href="/register" className="text-success">
                Register Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignIn;