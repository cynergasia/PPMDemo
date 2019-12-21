import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Row,
  Col,
  Input,
  ListGroupItemText
} from "reactstrap";
import DatePicker from "react-datepicker";

class PortfolioCriteria extends Component {
  state = {
    // projectList: {
    number: "",
    name: "",
    stage: "",
    pm: "",
    startdate: Date.now(),
    enddate: Date.now()
    // }
  };
  onSubmit = () => {};
  render() {
    const { status } = this.props;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>Portfolio Criteria</CardHeader>
          <CardBody>
            <ListGroupItemText>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    Project Number
                    <Input type="text" name="number" required />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    Project Name
                    <Input type="text" name="name" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    Project Stage
                    <Input type="text" name="stage" required />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    Start Date
                    <DatePicker
                      selected={this.state.startdate}
                      onChange={date => {
                        this.setState({ startdate: date });
                      }}
                      className="form-control"
                      name="startdate"
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      dateFormat="MM-dd-yyyy"
                    />
                    {/* <Input type="text" name="startdate" required /> */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    Key Member Role
                    <Input
                      type="select"
                      name="pm"
                      className="custom-select"
                      defaultValue="Suresh Padmanabhan(SP)"
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option>Suresh Padmanabhan(SP)</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    End Date
                    <DatePicker
                      selected={this.state.enddate}
                      onChange={date => {
                        this.setState({ enddate: date });
                      }}
                      className="form-control"
                      name="enddate"
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      dateFormat="MM-dd-yyyy"
                    />
                    {/* <Input type="text" name="enddate" required /> */}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    Key Member
                    <Input
                      type="select"
                      name="public"
                      className="custom-select"
                      defaultValue="Neeraj Garg (NG)"
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option>Neeraj Garg (NG)</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col lg="4">
                  <FormGroup>
                    Status
                    <Input type="text" name="name" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <FormGroup>
                    Organization
                    <Input type="text" name="name" required />
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    Customer
                    <Input type="text" name="name" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                {status === "N" && (
                  <Col lg="4" className="mt-2">
                    <FormGroup>
                      <Button onClick={this.onSubmit} color="primary">
                        Add
                      </Button>
                    </FormGroup>
                  </Col>
                )}
              </Row>
            </ListGroupItemText>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default PortfolioCriteria;
