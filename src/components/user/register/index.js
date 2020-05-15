import React, { useState } from "react";
import Modal from "simple-react-modal";

import "../signin/user.css";
//import RegisterContext from "../../context/user/registerContext";

const Register = (props) => {
  const initialUser = {
    name: "Test",
    email: "Test@test.com",
    password: "Test123",
    confirmPassword: "",
  };
    const [user, setUser] = useState(initialUser);
    const [ showModel, setShowModel ] = useState(props.showModel);
  /*const registerContext = useContext(RegisterContext);
  const { isModalOpen, closeRegister } = registerContext;
  const [user, setUser] = useState(registerContext.user);

  
*/
    const onChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
  const handleSubmit = (e) => {
      e.preventDefault();
      setShowModel(false);
  };
  return (
    <Modal
      show={showModel}
      style={{ background: "black" }} //overwrites the default background
      transitionSpeed={900}
      containerClassName="modal__layout"
    >
      <div className="modal-content modal__content">
        <i className="fa fa-times-circle-o modal__close" aria-hidden="true" />
        <div className="modal-header modal__header">
          <h3>
            <div>Register</div>
          </h3>
          <h4>
            <div>* All Field Are Required</div>
          </h4>
        </div>
        <div className="modal-body">
                  <form className="modal__form" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="fullName" className="col-sm-3 col-form-label">
                Name*
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email*
              </label>
              <div className="col-sm-9">
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
              <label htmlFor="password" className="col-sm-3 col-form-label">
                Password*
              </label>
              <div className="col-sm-9">
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
            <div className="form-group row">
                <label
                    htmlFor="confirmPassword"
                    className="col-sm-3 col-form-label"
                >
                    ConfirmPassword*
                </label>
                <div className="col-sm-9">
                    <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={onChange}
                    />
                </div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary modal__button__login"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        <div className="modal__footer">
          <span>
            Already have an account ? <a href="#"> Login </a>
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
