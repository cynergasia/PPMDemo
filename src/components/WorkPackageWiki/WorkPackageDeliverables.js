import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class WorkPackageDeliverables extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Deliverables
            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            This Workpackage has 4 deliverables. There are 2 deliverables which
            are due in 10 days : 11234, 79654. There are no overdue deliverables
            at this point.
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageDeliverables;
