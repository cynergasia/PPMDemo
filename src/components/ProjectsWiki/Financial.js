import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Financial extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Financials
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="12" md="6" lg="5">
                <label>Contracted Amount: xxxxxx.xx</label>
                <br />
                <label>Approved Cos: xxxxxx.xx </label>
                <br />
                <label>Current Amount: xxxxx.xx </label>
              </Col>
              <Col sm="12" md="6" lg="5">
                <label>Invoiced: xxxxxx.xx</label>
                <br />
                <label>Backlog: xxxxx.xx</label>
                <br />
                <label>Paid: xxxxx.xx (Overdue: xxxxxx.xx)</label>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Financial;
