import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/blockchain-freelance.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>Arslan M.</h1>
              <h4>Blockchain NFT &amp; Web3.0 Consultant</h4>
              <div className="social-icon">
                <a href="https://github.com/arslan-mumtaz" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://github.com/arslan-mumtaz" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/arslan-mumtaz" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="https://github.com/arslan-mumtaz" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
