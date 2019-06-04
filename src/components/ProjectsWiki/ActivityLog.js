import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export class ActivityLog extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Comments &nbsp; Project ActivityLog
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody />
        </Card>
      </React.Fragment>
    );
  }
}

export default ActivityLog;
