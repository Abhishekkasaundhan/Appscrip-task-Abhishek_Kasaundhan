import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Be the First to Know */}
          <div className="col-md-4 mb-4">
            <h5>BE THE FIRST TO KNOW</h5>
            <p>Sign up for updates from mettä muse.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email..."
                aria-label="Subscribe"
              />
              <button className="btn btn-light" type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Orders & Shipping</a></li>
              <li><a href="#!" className="text-white">Join/Login as Seller</a></li>
              <li><a href="#!" className="text-white">Payment & Pricing</a></li>
              <li><a href="#!" className="text-white">Returns & Refunds</a></li>
              <li><a href="#!" className="text-white">FAQs</a></li>
              <li><a href="#!" className="text-white">Privacy Policy</a></li>
              <li><a href="#!" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-4">
            <h5>CONTACT US</h5>
            <p>
              <strong>Phone:</strong> +44 20 3286 5660<br />
              <strong>Email:</strong> <a href="mailto:customercare@mettamuse.com" className="text-white">customercare@mettamuse.com</a>
            </p>
            <p>
              <strong>CURRENCY:</strong> USD<br />
              Transactions will be converted to USD at the time of purchase.
            </p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>FOLLOW US</h5>
            <div>
              <a href="#!" className="text-white me-3"><i className="fa fa-instagram"></i></a>
              <a href="#!" className="text-white"><i className="fa fa-facebook"></i></a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="col-md-6 text-md-end">
            <h5>mettä muse ACCEPTS</h5>
            <div>
              <i className="fa fa-cc-visa fa-2x text-white me-3"></i>
              <i className="fa fa-cc-mastercard fa-2x text-white me-3"></i>
              <i className="fa fa-cc-amex fa-2x text-white me-3"></i>
              <i className="fa fa-cc-paypal fa-2x text-white"></i>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4">
          <p className="mb-1">&copy; 2023 mettä muse. All rights reserved.</p>
          <a
            className="text-white fs-4"
            href="https://github.com/Abhishekkasaundhan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
