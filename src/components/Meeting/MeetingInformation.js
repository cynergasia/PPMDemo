import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Input } from "reactstrap";

class MeetingInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Meeting Information
            <div className="card-header-actions">
              <i className="fa fa-times-circle-o mr-2" />
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="12" md="6" lg="3" className="mb-2">
                <Row>
                  <Col sm="12" md="6" lg="5">
                    Template
                  </Col>
                  <Col sm="12" md="6" lg="7">
                    <Input type="text" name="template" />
                  </Col>
                </Row>
              </Col>
              <Col sm="12" md="6" lg="3" className="mb-2">
                <Row>
                  <Col sm="12" md="6" lg="6">
                    Recurring
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <Input type="text" name="template" />
                  </Col>
                </Row>
              </Col>
              <Col sm="12" md="6" lg="3" className="mb-2">
                <Row>
                  <Col sm="12" md="6" lg="6">
                    Frequency
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <select name="frequency" className="form-control">
                      <option>Select</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </Col>
                </Row>
              </Col>
              <Col sm="12" md="6" lg="3" className="mb-2">
                <Row>
                  <Col sm="12" md="6" lg="6">
                    Ends on
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <Input type="text" name="template" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6" lg="3" className="mb-2">
                <Row>
                  <Col sm="12" md="6" lg="5">
                    Date
                  </Col>
                  <Col sm="12" md="6" lg="7">
                    <Input type="date" name="meetingdate" />
                  </Col>
                </Row>
              </Col>
              <Col sm="12" md="6" lg="3">
                <Row>
                  <Col sm="12" md="6" lg="6">
                    Location
                  </Col>
                  <Col sm="12" md="6" lg="6">
                    <Input type="text" name="location" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="12" lg="12">
                <div className="form-group">
                  <label>Attendee </label>
                  <Input type="textarea" rows="3" />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default MeetingInformation;
