import React from "react";
import "./Nav.css";
import logo from "../Assets/New Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="lname">
        <div className="feet">
          <div className="v1">
            <img src={logo} className="image" />
          </div>
          <div className="v2">
            <h1>ROMI FINANCE</h1>
          </div>
        </div>
      </div>
      <div className="social">
<div className="socialmedia">
<div className="round"><img className="image1" src="https://zomi.finance/static/media/ic_twitter.9f35b403.svg"/></div>
<div className="round"><img className="image1" src="	https://zomi.finance/static/media/ic_medium.f6051b2e.svg"/></div>
<div className="round"><img className="image1" src="https://zomi.finance/static/media/ic_github.dbd4de8a.svg"/></div>
<div className="round"><img className="image1" src="https://zomi.finance/static/media/ic_discord.be4d716c.svg"/></div>
</div>
<div className="terms"></div>
</div>
    </div>
  );
};

export default Footer;
