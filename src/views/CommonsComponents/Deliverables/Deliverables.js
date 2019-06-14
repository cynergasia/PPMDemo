import React, { Component } from "react";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import _sum from "lodash/sum";

const labels = ["Not Started", "Started", "Completed", "On Hold", "Action"];
const datasets = [
  {
    data: [3, 6, 16, 0, 0],
    backgroundColor: [
      "#0077b5", // Blue
      "#fc6d21", // Orange
      "#06a54e", // Green
      "#59239d", // Purple
      "#bf2511" //red
    ]
  }
];
const text = [`${_sum(datasets["0"].data)}`, "Deliverables"];
const deliverablesData = { labels, datasets, text };

class Deliverables extends Component {
  render() {
    let totalCount = 0;
    deliverablesData.datasets[0].data.map(i => (totalCount = totalCount + i));
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverable Register
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  className="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i className="fa fa-ellipsis-h card-header-icons" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" className="mx-auto col-doughnut">
                <div className="chart-wrapper">
                  <Doughnut
                    data={deliverablesData}
                    options={this.props.options}
                    height={1}
                    width={1}
                  />
                  {/*<span className="deliverable doughnutText text-center">
                    <p>{totalCount}</p> <span>Deliverable </span>
                  </span> */}
                </div>
              </Col>
              <Col xs="12" sm="12" lg="3"  className="mr-auto">
                <div className="chart-wrapper">
                  <h6 className="chart-title">STATUS</h6>
                  {deliverablesData.datasets[0].data.map((data, index) => (
                    <div className="summary-status-value-wrap" key={index}>
                      <div className="left">
                        <div
                          className="property-value"
                          style={{
                            backgroundColor:
                              deliverablesData.datasets[0].backgroundColor[
                                index
                              ]
                          }}
                        />
                        <div className="property">
                          {deliverablesData.labels[index]}
                        </div>
                      </div>
                      <div className="right">{data}</div>
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs="12" sm="12" lg="4">
                <div className="title-wrap">
                  <h6 className="left">DUE DATE</h6>
                  <Link to="/500">
                    <h6 className="right">4 OVERDUE</h6>
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
                      <div className="inner-td-wrapper">
                        <h4>0</h4>
                        <p>THIS MONTH</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Deliverables;
