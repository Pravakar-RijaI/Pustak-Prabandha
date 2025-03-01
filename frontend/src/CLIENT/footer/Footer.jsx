import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mt-3">Info</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:pustakprabandha@gmail.com"
                  className="text-white"
                >
                  Email: pustakprabandha@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:016613199" className="text-white">
                  Phone: +01-6613199
                </a>
              </li>
              <li className="text-white">Address: Bhaktapur, Nepal</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mt-3">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-white">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mt-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-12 text-center">
            <small>&copy; 2025 Pustak Prabandha. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
