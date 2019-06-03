import React from "react";

const RiskScore = props => {
  return (
    <React.Fragment>
      <div className="chart-wrapper">
        <h6 class="chart-title">RISK SCORE</h6>
        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#ea452c" }}
            />
            <div className="property">20</div>
          </div>
          <div className="right">1</div>
        </div>

        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#ea452c" }}
            />
            <div className="property">16</div>
          </div>
          <div className="right">2</div>
        </div>

        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#f7d660" }}
            />
            <div className="property">12</div>
          </div>
          <div className="right">1</div>
        </div>
        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#f7d660" }}
            />
            <div className="property">12</div>
          </div>
          <div className="right">1</div>
        </div>
        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#f7d660" }}
            />
            <div className="property">9</div>
          </div>
          <div className="right">1</div>
        </div>
        <div className="summary-status-value-wrap">
          <div className="left">
            <div
              className="property-value"
              style={{ backgroundColor: "#0aaf26" }}
            />
            <div className="property">6</div>
          </div>
          <div className="right">2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RiskScore;
