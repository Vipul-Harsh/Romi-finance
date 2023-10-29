import React from "react";
import "./Dash.css";

const Table = () => {
  return (
    <div className="main">
      <div className="table">
        <div className="title"><h3>$ZLP Index Composition</h3></div>
        <div className="con">
          <table>
            <thead>
              <tr>
                <th>TOKEN</th>
                <th>PRICE</th>
                <th>POOL</th>
                <th>WEIGHT</th>
                <th>UTILIZATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="imgc">
                    <div className="ic">
                      <img src="https://zomi.finance/static/media/ic_wbtc_40.8330ef8d.svg" />
                    </div>
                    <div className="content">Ethereum ETH</div>
                  </div>
                </td>
                <td>$10.00</td>
                <td>Pool 1</td>
                <td>0.5</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>
                  <div className="imgc">
                    <div className="ic">
                      <img src="	https://zomi.finance/static/media/ic_ape_40.53ac41f3.svg" />
                    </div>
                    <div className="content">Wrapped Bitcoin WBTC</div>
                  </div>
                </td>
                <td>$20.00</td>
                <td>Pool 2</td>
                <td>0.3</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>
                  <div className="imgc">
                    <div className="ic">
                      <img src="	https://zomi.finance/static/media/ic_usdc_40.27f415ba.svg" />
                    </div>
                    <div className="content">ApeCoin APE</div>
                  </div>
                </td>
                <td>$15.00</td>
                <td>Pool 3</td>
                <td>0.6</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>
                  <div className="imgc">
                    <div className="ic">
                      <img src="	https://zomi.finance/static/media/ic_eth_40.5e255508.svg" />
                    </div>
                    <div className="content">USD CoinUSDC</div>
                  </div>
                </td>
                <td>$25.00</td>
                <td>Pool 4</td>
                <td>0.4</td>
                <td>75%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
