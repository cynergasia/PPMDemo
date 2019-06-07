import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import IssueRegisterStatus from "./IssueRegisterStatus";

const issueProjectData = {
  labels: [
    "Overdue",
    "Action Required",
    "On Hold",
    "At Risk",
    "Completed",
    "Not Started",
    "Started"
  ],
  datasets: [
    {
      data: [5, 0, 0, 0, 3, 0, 1],
      backgroundColor: [
        "#edc02d", //Yellow
        "#bf2511", //red
        "#59239d", // Purple
        "#09090a", //Black
        "#06a54e", // Green
        "#0077b5", // Blue
        "#fc6d21" // Orange
      ]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  title: {
    position: "bottom"
  },
  legend: {
    display: false
  },
  maintainAspectRatio: false
};

class IssueRegister extends Component {
  render() {
    let totalCount = 0;
    issueProjectData.datasets[0].data.map(i => (totalCount = totalCount + i));
    return (
      <>
        <Card>
          <CardHeader>
            Issue Register
            <div className="card-header-actions">
              {/* <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a> */}

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
              <Col xs="8" sm="12" lg="6">
                <div className="chart-wrapper">
                  <Doughnut data={issueProjectData} options={options} />
                  <span className="doughnutText text-center">
                    <p>{totalCount}</p> <span>Issue</span>
                  </span>
                </div>
              </Col>
              <Col xs="8" sm="12" lg="6">
                <h6 className="chart-title">STATUS</h6>
                <IssueRegisterStatus issueProjectData={issueProjectData} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default IssueRegister;
