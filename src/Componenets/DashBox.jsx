import React from "react";
import "./Dash.css";

const DashBox = () => {
  return (
    <div className="dash">
      <div className="stat">
        <h1>Stats</h1>
      </div>
      <div className="tab">
        <div className="t1">
          <div className="title1">Overview</div>
          <div className="tc">
            <table>
              <tbody>
                <tr>
                  <td>AUM</td>
                  <td>$34</td>
                </tr>
                <tr>
                  <td>$34</td>
                  <td>$34</td>
                </tr>
                <tr>
                  <td>24h Volume</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>$0</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Short Positions</td>
                  <td>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="t1">
          <div className="title1">Overview</div>
          <div className="tc">
            <table>
              <tbody>
                <tr>
                  <td>AUM</td>
                  <td>$34</td>
                </tr>
                <tr>
                  <td>$34</td>
                  <td>$34</td>
                </tr>
                <tr>
                  <td>24h Volume</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>$0</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Short Positions</td>
                  <td>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBox;
