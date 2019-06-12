import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Input,
  Label,
  Button,
  Progress
} from "reactstrap";
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
              {/* <a href="/#/500" download>
                <i
                  className="fa fa-save card-header-icons"
                  aria-hidden="true"
                />
              </a>
              <a href="/#/500" download>
                <i
                  className="fa fa-group card-header-icons"
                  aria-hidden="true"
                />
              </a> */}
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
                  todayButton={"Today"}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">PPC : </Label>
              </Col>
              <Col sm="12" md="4" lg="6">
                <Label>40%</Label>
                {/* <Progress animated value={100 * 8}  /> */}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="2" md="2" lg="3">
                <Label className="float-right">Overall Status : </Label>
              </Col>
              <Col sm="12" md="4" lg="4">
                <Input
                  type="select"
                  className="custom-select"
                  defaultValue="In-Trouble"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option>In-Trouble</option>
                </Input>
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
            <Row className="mt-2">
              <Col sm="12" md="12" lg="12">
                <div className="float-right">
                  <Button color="primary" style={{ textTransform: "none" }}>
                    <i className="fa fa-save mr-2" />Save
                  </Button>
                  <Button color="primary" style={{ textTransform: "none" }}>
                    <i className="fa fa-group mr-2" />Publish
                  </Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default OverallStatus;
