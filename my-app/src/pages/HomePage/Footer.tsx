import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src="/Images/FacebookLogo.png" alt="Facebook" className="icon" />
        <img src="/Images/InstagramLogo.png" alt="Instagram" className="icon" />
        <img src="/Images/TwitterLogo.png" alt="Twitter" className="icon" />
        <img src="/Images/YoutubeLogo.png" alt="YouTube" className="icon" />
      </div>
      <div className="footer-links">
        <a className="link" href="#">Audio description</a>
        <a className="link" href="#">Investor relations</a>
        <a className="link" href="#">Privacy</a>
        <a className="link" href="#">Contact us</a>
        <a className="link" href="#">Help center</a>
        <a className="link" href="#">Jobs</a>
        <a className="link" href="#">Legal notices</a>
        <a className="link" href="#">Gift cards</a>
        <a className="link" href="#">Netflix shop</a>
        <a className="link" href="#">Cookie preferences</a>
        <a className="link" href="#">Press</a>
        <a className="link" href="#">Terms of use</a>
        <a className="link" href="#">Corporate information</a>
      </div>
      <div className="footer-button-container">
        <button className="footer-button">Service Code</button>
      </div>
      <div className="footer-copyright">
        © 1997-2024 Netflix, Inc.
      </div>
    </div>
  );
};

export default Footer;
