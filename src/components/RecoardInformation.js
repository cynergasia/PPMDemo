import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class RecoardInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="position-sticky">
          <CardHeader>
            Record Information
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <div className="avatar float-right">
              <img
                className="img-avatar"
                src="assets/img/avatars/7.jpg"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <div>
              Meeting with <strong>Lucas</strong>{" "}
            </div>
            <small className="text-muted mr-3">
              <i className="icon-calendar" />&nbsp; 1 - 3pm
            </small>
            <small className="text-muted">
              <i className="icon-location-pin" /> Palo Alto, CA
            </small>
            <hr />
            <div className="avatar float-right">
              <img
                className="img-avatar"
                src="assets/img/avatars/7.jpg"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <div>
              Meeting with <strong>Lucas</strong>{" "}
            </div>
            <small className="text-muted mr-3">
              <i className="icon-calendar" />&nbsp; 1 - 3pm
            </small>
            <small className="text-muted">
              <i className="icon-location-pin" /> Palo Alto, CA
            </small>
            <hr />
            <div className="avatar float-right">
              <img
                className="img-avatar"
                src="assets/img/avatars/7.jpg"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <div>
              Meeting with <strong>Lucas</strong>{" "}
            </div>
            <small className="text-muted mr-3">
              <i className="icon-calendar" />&nbsp; 1 - 3pm
            </small>
            <small className="text-muted">
              <i className="icon-location-pin" /> Palo Alto, CA
            </small>
            <hr />
            <div className="avatar float-right">
              <img
                className="img-avatar"
                src="assets/img/avatars/7.jpg"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <div>
              Meeting with <strong>Lucas</strong>{" "}
            </div>
            <small className="text-muted mr-3">
              <i className="icon-calendar" />&nbsp; 1 - 3pm
            </small>
            <small className="text-muted">
              <i className="icon-location-pin" /> Palo Alto, CA
            </small>
            <hr />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RecoardInformation;
