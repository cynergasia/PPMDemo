import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class DeliverablesInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverables Information
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default DeliverablesInformation;
