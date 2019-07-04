import React, { Component } from "react";
import { Row, Col, Input, FormGroup, Button } from "reactstrap";

class EditProjectInformation extends Component {
  render() {
    const {
      projectName,
      projectType,
      opportunity_number,
      organization,
      federal_project,
      currency,
      partnering_needed,
      stage,
      project_manager,
      project_approver,
      pl_manager,
      region,
      available_to_copy,
      type,
      description
    } = this.props.projectInfo;
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label>
                  Project Name <b className="text-danger">*</b>
                </label>
                <Input type="text" name="name" value={projectName} required />
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Project Type <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="type"
                  className="custom-select"
                  defaultValue={projectType}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Design</option>
                  <option>Schedule</option>
                  <option>Budget</option>
                  <option>Invoice</option>
                  <option>Contract</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Opportunity Number <b className="text-danger">*</b>
                </label>
                <Input
                  type="text"
                  name="name"
                  value={opportunity_number}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Organization <b className="text-danger">*</b>
                </label>
                <Input type="text" name="name" value={organization} required />
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Federal Project <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={federal_project}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Currency <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={currency}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="Y">USD</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Partnering Needed <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={partnering_needed}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Stage <b className="text-danger">*</b>
                </label>
                <Input type="text" name="name" value={stage} required />
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Project Manager <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={project_manager}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Suresh Padmanabhan(SP)</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Project Approver <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={project_approver}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Neeraj Garg (NG)</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  P&L Manager <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={pl_manager}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Arindam Mukherjee(AM)</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Region <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={region}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="N">United States</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Available to Copy <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="public"
                  className="custom-select"
                  defaultValue={available_to_copy}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label>
                  Type <b className="text-danger">*</b>
                </label>
                <Input
                  type="select"
                  name="type"
                  className="custom-select"
                  defaultValue={type}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option>Design</option>
                  <option>Schedule</option>
                  <option>Budget</option>
                  <option>Invoice</option>
                  <option>Contract</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label>Description</label>
                <Input
                  type="textarea"
                  rows="3"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <FormGroup className="text-center">
                <Button color="danger" onClick={this.props.toggle}>
                  Close
                </Button>
                <Button type="submit" name="submit" color="primary">
                  Save
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </form>
      </React.Fragment>
    );
  }
}

export default EditProjectInformation;
