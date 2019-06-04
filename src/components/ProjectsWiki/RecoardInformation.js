import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class RecoardInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Recoard Information
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default RecoardInformation;
