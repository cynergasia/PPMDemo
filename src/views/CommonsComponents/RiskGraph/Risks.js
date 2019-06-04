import React, { Component } from "react";
import ReactAnyChart from "anychart-react";
import anyChart from "anychart";
import data from "./data.json";
import "./Risk.css";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import RiskScore from "./RiskScore.js";

let stage = anyChart.graphics.create();
let heatmap = anyChart.heatMap(data);
let customColorScale = anyChart.scales.ordinalColor();
customColorScale.ranges([
  { less: 6 },
  { from: 6, to: 9 },
  { from: 9, to: 12 },
  { from: 12, to: 16 },
  { from: 16, to: 20 },
  { greater: 20 }
]);
customColorScale.colors([
  "#0aaf26",
  "#f7d660",
  "#f7d660",
  "#ea452c",
  "#ea452c",
  "#343a40"
]);
heatmap.colorScale(customColorScale);
// heatmap.title("Heat Map: Labels and Tooltips (Formatting Functions)");
heatmap.container("container");

heatmap.labels().useHtml(true);
heatmap.labels().format(function() {
  return this.getData("custom_field");
});
heatmap.tooltip().format(function() {
  const heat = this.heat;
  const level =
    heat <= 6 ? "Low" : heat < 12 ? "Medium" : heat <= 20 ? "High" : "Extreme";
  return `${level} (${heat}%)\n\n Risk Score: ${this.getData("custom_field") ? this.getData("custom_field") : 0}`;
});
// heatmap.yAxis().title("Likelihood");

heatmap
  .xAxis()
  .labels()
  .format(function() {
    var value = "";
    return value;
  });

heatmap
  .yAxis()
  .labels()
  .format(function() {
    var value = "";
    return value;
  });

class Risks extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            Risk Register
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  class="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i class="fa fa-ellipsis-h card-header-icons" />
              {/* <i class="fa fa-th"></i> */}
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <div className="col-xs-12 col-sm-12 col-lg-5 position-relative">
                <div className="chart-wrapper risks">
                  <div className="chart-header">
                    <p>
                      <b>Likelihood</b>
                    </p>
                  </div>
                  <ReactAnyChart
                    instance={stage}
                    charts={[heatmap]}
                    height={200}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "-10px",
                      transform: "translateX(-50%)"
                    }}
                  >
                    <b>Impact</b>
                  </span>
                </div>
              </div>
              <Col xs="12" sm="12" lg="3">
                <RiskScore />
              </Col>
              <Col xs="12" sm="12" lg="4">
                <div className="title-wrap">
                  <h6 className="left">TARGET DATE</h6>
                  <Link to="/500">
                    <h6 className="right">3 OVERDUE</h6>
                  </Link>
                </div>
                <Row>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <div className="inner-td-wrapper">
                        <h4>0</h4>
                        <p>TODAY</p>
                      </div>
                      <div className="inner-td-wrapper">
                        <h4>0</h4>
                        <p>THIS WEEK</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs="8" sm="6" lg="6">
                    <div className="target-date-wrapper">
                      <div className="inner-td-wrapper">
                        <h4>0</h4>
                        <p>TOMMOROW</p>
                      </div>
                      <Link to="/500">
                        <div className="inner-td-wrapper">
                          <h4>3</h4>
                          <p>THIS MONTH</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Risks;
