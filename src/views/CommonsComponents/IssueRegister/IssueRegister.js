import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import IssueRegisterStatus from "./IssueRegisterStatus";
import _sum from "lodash/sum";

const labels = [
  "Overdue",
  "Action Required",
  "On Hold",
  "At Risk",
  "Completed",
  "Not Started",
  "Started"
];

const datasets = [
  {
    data: [5, 0, 0, 0, 3, 0, 1],
    backgroundColor: [
      "#edc02d", // Yellow
      "#bf2511", // Red
      "#59239d", // Purple
      "#09090a", // Black
      "#06a54e", // Green
      "#0077b5", // Blue
      "#fc6d21" // Orange
    ]
  }
];

const text = [`${_sum(datasets["0"].data)}`, "Issues"];

const issueProjectData = { labels, datasets, text };

class IssueRegister extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            Issue Register
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
              <Col xs="8" sm="12" lg="6">
                <div className="chart-wrapper">
                  <Doughnut
                    data={issueProjectData}
                    options={this.props.options}
                  />
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
