import React, { useState, useContext } from "react";
import Modal from 'simple-react-modal';
import './user.css';

import Api from '../../../lib/helper/api';

const Signin = (props) => {
    const initialLoginUser = {
      email: "adminfr@admin.com",
      password: "adminfr",
    };
    const [user, setUser] = useState(initialLoginUser);
    const [showModel, setShowModel] = useState(props.showModel);

     const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
     };
    
    const setSession = (r) => {
        sessionStorage.setItem("token", r.accessToken);
        sessionStorage.setItem("username", r.customer.name);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'customers/login';
        await Api.post(url, user)
          .then(function (response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
              return response.json();
          })
        .then(function (response) {
            setSession(response);   
            props.handleLogIn();
            props.handleLoginModal();
          })
          .catch(function (error) {
            console.log(error);
          });
     }

    return (
      <Modal
        show={showModel}
        style={{ background: "black" }} //overwrites the default background
        transitionSpeed={1000}
        containerClassName="modal__layout"
      >
        <div className="modal-content modal__content">
          <i className="fa fa-times-circle-o modal__close" aria-hidden="true" />
          <div className="model-header modal__header">
            <h3>
              <div>SignIn </div>
            </h3>
            <h4>
              <div>*All Required Fields</div>
            </h4>
          </div>
          <div className="modal-body">
            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email*
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  password*
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-group modal__button__login">
                <button type="submit" className="btn btn-primary">
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="modal__footer">
            <div>
              Don't have an account ? <a> Register</a>
            </div>
            <div>
              <a>Forget password</a>
            </div>
          </div>
        </div>
      </Modal>
    );
}
export default Signin;