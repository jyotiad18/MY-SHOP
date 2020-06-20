import React from "react";

const Register = () => {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-6">
        <div className="signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                Register Now
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-success">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
