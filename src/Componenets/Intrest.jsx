import React from "react";
import "./Nav.css";

const Intrest = () => {
  return (
    <div className="you">
      <div className="volume">
        <div className="icon"><img src="https://zomi.finance/static/media/ic_trading.2c53815a.svg"/></div>
        <div className="write">
          <div className="val">Total Trading Value</div>
          <div className="nmber">$0</div>
        </div>
      </div>
      <div className="intrest">
        <div className="icon"><img src="	https://zomi.finance/static/media/ic_stats.f0a18011.svg"/></div>
        <div className="write">
          <div className="val">Open Intrest</div>
          <div className="nmber">$0</div>
        </div>
      </div>
      <div className="Users">
        <div className="icon"><img src="	https://zomi.finance/static/media/ic_totaluser.ae09b310.svg"/></div>
        <div className="write">
          <div className="val">Total users</div>
          <div className="nmber">0</div>
        </div>
      </div>
    </div>
  );
};

export default Intrest;
