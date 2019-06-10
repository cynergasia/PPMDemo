import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col, Input, Label } from "reactstrap";
import DatePicker from "react-datepicker";
class OverallStatus extends Component {
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Overall Status
            <div className="card-header-actions">
              <a href="/#/500" download>
                <i
                  className="fa fa-download card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <i className="fa fa-ellipsis-h card-header-icons" />
              {/* <i className="fa fa-th"></i> */}
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">PSR As Of : </Label>
              </Col>
              <Col sm="12" md="4" lg="4">
                {/* <Input type="date" name="psrasof" /> */}
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className="form-control"
                  showYearDropdown
                  showMonthDropdown
                  useShortMonthInDropdown
                />
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
