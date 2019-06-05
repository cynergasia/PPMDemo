import React, { Component } from "react";
import { Card, CardHeader, CardBody, Input, Row, Col } from "reactstrap";

class DeliverablesApprovalStatus extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Approval Status
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <Row>
              <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
                <div className="card">
                  <div className="card-header">asdfasdf</div>
                  <div className="card-body">
                    <i className="fa fa-user" style={{ fontSize: "3rem" }} />
                  </div>
                </div>
                <i
                  className="ml-4 fa fa-long-arrow-right text-success"
                  style={{ fontSize: "3rem" }}
                />
                <i className="ml-4 fa fa-user" style={{ fontSize: "3rem" }} />
                <i
                  className="ml-4 fa fa-long-arrow-right text-success"
                  style={{ fontSize: "3rem" }}
                />
                <i className="ml-4 fa fa-user" style={{ fontSize: "3rem" }} />
              </div>
            </Row>
            <div className="row mt-5 justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <label>Comments:</label>
                  <Input type="textarea" name="comments" />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default DeliverablesApprovalStatus;
