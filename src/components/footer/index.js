import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3">
            <h5>About</h5>
            <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <p className="mb-0">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                </p>
            </div>
        </div>
      </div>
    </footer>
    )
};

export default Footer;
