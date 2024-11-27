import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  const handleItemClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Techflix AI</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with our
              cutting-edge tech business solutions.
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_link">
              <li>
                <Link to="/courses" onClick={handleItemClick}>
                  Our programs
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleItemClick}>
                  Our plan
                </Link>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOg0b">
                  Become a member
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_link">
              <li>
                <Link to="/AboutUs" onClick={handleItemClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact us" onClick={handleItemClick}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/Support" onClick={handleItemClick}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
