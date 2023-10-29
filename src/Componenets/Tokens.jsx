import React from "react";
import Blank from "./Blank";
import Heading from "./Heading";
import Inside from "./Inside";
import "./Nav.css";
const Tokens = () => {
  return (
    <div className="large">
      <div className="reduce">
        <div className="bd">
          <div className="it">
            <div className="icon">
              <img src="	https://zomi.finance/static/media/ic_liquidity.505b3f30.svg" />
            </div>
            <div className="wri">Reduce Liquidation Risks</div>
          </div>
          <div className="para">
            An aggregate of high-quality price feeds determine when liquidations
            occur. This keeps positions safe from temporary wicks.
          </div>
        </div>
        <div className="bd">
          <div className="it">
            <div className="icon">
              <img src="	https://zomi.finance/static/media/ic_cost.b4a729d3.svg" />
            </div>
            <div className="wri">Save on Costs</div>
          </div>
          <div className="para">
            Enter and exit positions with minimal spread and zero price impact.
            Get the optimal price without incurring additional costs.
          </div>
        </div>
        <div className="bd">
          <div className="it">
            <div className="icon">
              <img src="https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg" />
            </div>
            <div className="wri">Save on Costs</div>
          </div>
          <div className="para">
            Open positions through a simple swap interface. Conveniently swap
            from any supported asset into the position of your choice.
          </div>
        </div>
      </div>
      <Blank />
      <Heading />
      <Inside />
    </div>
  );
};

export default Tokens;
