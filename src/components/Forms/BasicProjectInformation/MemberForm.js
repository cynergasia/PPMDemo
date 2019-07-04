import React, { Component } from "react";
import { Col, FormGroup, Input, Button } from "reactstrap";
import DatePicker from "react-datepicker";

class MemberForm extends Component {
  render() {
    const { id, index, member } = this.props;

    return (
      <form id={`member-${id}`} className="row">
        <Col lg="3">
          <FormGroup>
            <label>
              Person Name <b className="text-danger">*</b>
            </label>
            <Input
              onChange={({ target: { name, value } }) =>
                this.props.handleChangeMembers(index, name, value)
              }
              type="text"
              name="person"
              value={member.person}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="3">
          <FormGroup>
            <label>
              Role <b className="text-danger">*</b>
            </label>
            <Input
              onChange={({ target: { name, value } }) =>
                this.props.handleChangeMembers(index, name, value)
              }
              type="select"
              name="role"
              value={member.role}
              className="custom-select"
            >
              <option disabled selected>
                Select
              </option>
              <option value="Project Manager">Project Manager</option>
              <option value="Project Approver">Project Approver</option>
              <option value="P&L Manager">P&L Manager</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label>
              Start Date <b className="text-danger">*</b>
            </label>
            <DatePicker
              name="startDate"
              className="form-control"
              selected={member.startDate}
              selectsStart
              startDate={member.startDate}
              endDate={member.endDate}
              onChange={date =>
                this.props.handleChangeMembers(index, "startDate", date)
              }
            />
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label>
              End Date <b className="text-danger">*</b>
            </label>
            <DatePicker
              name="endDate"
              className="form-control"
              selected={member.endDate}
              selectsEnd
              startDate={member.startDate}
              endDate={member.endDate}
              minDate={member.startDate}
              onChange={date =>
                this.props.handleChangeMembers(index, "endDate", date)
              }
            />
          </FormGroup>
        </Col>
        <Col lg="1" className="ml-auto">
          <FormGroup>
            <label htmlFor="" />
            <Button
              color="danger"
              className="form-control"
              onClick={() => this.props.deleteMember(index)}
            >
              X
            </Button>
          </FormGroup>
        </Col>
      </form>
    );
  }
}

export default MemberForm;
