import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class BasicInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Basic Project Information
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            This project has 6 internal stakeholders and 2 external
            stakeholders.
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
