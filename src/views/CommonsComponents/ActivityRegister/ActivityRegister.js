import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Row, Col, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

const activitiesData = {
  labels: ["Not Started", "Started", "Completed", "On Hold", "Action"],
  datasets: [
    {
      data: [4, 7, 16, 0, 0],
      backgroundColor: [
        "#0077b5", // Blue
        "#fc6d21", // Orange
        "#06a54e", // Green
        "#59239d", // Purple
        "#bf2511" //red
      ]
    }
  ]
};
class ActivityRegister extends Component {
  render() {
    let totalCount = 0;
    activitiesData.datasets[0].data.map(i => (totalCount = totalCount + i));
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
          Activity Register
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  class="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i class="fa fa-ellipsis-h card-header-icons" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="12" lg="5">
                <div className="chart-wrapper">
                  <Doughnut
                    data={activitiesData}
                    options={this.props.options}
                  />
                  <span className="doughnutText text-center">
                    <p>{totalCount}</p> <span>Activity</span>
                  </span>
                </div>
              </Col>
              <Col xs="12" sm="12" lg="3">
                <div className="chart-wrapper">
                  <h6 class="chart-title"> STATUS</h6>
                  {activitiesData.datasets[0].data.map((data, index) => (
                    <div className="summary-status-value-wrap">
                      <div className="left">
                        <div
                          className="property-value"
                          style={{
                            backgroundColor:
                              activitiesData.datasets[0].backgroundColor[index]
                          }}
                        />
                        <div className="property">
                          {activitiesData.labels[index]}
                        </div>
                      </div>
                      <div className="right">
                        {activitiesData.datasets[0].data[index]}
                      </div>
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

export default ActivityRegister;
