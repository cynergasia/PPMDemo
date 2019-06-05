import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Input, Label } from "reactstrap";

class OverallStatus extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Overall Status
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  class="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i class="fa fa-ellipsis-h card-header-icons" />
              {/* <i class="fa fa-th"></i> */}
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">PSR As Of : </Label>
              </Col>
              <Col sm="12" md="4" lg="4">
                <Input type="date" name="psrasof" />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">PPC : </Label>
              </Col>
              <Col sm="12" md="4" lg="3">
                <Label>40%</Label>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">Overall Status : </Label>
              </Col>
              <Col sm="12" md="4" lg="4">
                <Label>In-Trouble</Label>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">Narrative : </Label>
              </Col>
              <Col sm="12" md="4" lg="9">
                <Input type="textarea" rows="6" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default OverallStatus;
