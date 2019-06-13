import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import database from "../database";

const intialState = {
  isOpenSchedule: false,
  isWorkflowSchedule: false,
  isAuditSchedule: false,
  isplusclass1: false,
  isplusclass2: false,
  isplusclass3: false
};

class RecoardInformation extends Component {
  state = { ...intialState };
  toggle = () => {
    this.setState({
      ...intialState,
      isOpenSchedule: !this.state.isOpenSchedule,
      isplusclass1: !this.state.isplusclass1
    });
  };
  toggleWorkFlow = () => {
    this.setState({
      ...intialState,
      isWorkflowSchedule: !this.state.isWorkflowSchedule,
      isplusclass2: !this.state.isplusclass2
    });
  };
  toggleAuditInfo = () => {
    this.setState({
      ...intialState,
      isAuditSchedule: !this.state.isAuditSchedule,
      isplusclass3: !this.state.isplusclass3
    });
  };
  render() {
    const scheduleinfo = database.recoard_information.schedule_info;
    const workflowinfo = database.recoard_information.workflow_info;
    const auditinfo = database.recoard_information.audit_info;

    console.log(scheduleinfo);
    return (
      <React.Fragment>
        <Card className="position-sticky">
          <CardHeader>
            Record Information
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
<<<<<<< HEAD
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
            <hr/>
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
=======
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggle()}
                >
                  <i
                    className={
                      this.state.isplusclass1
                        ? "fa-plus-minus fa fa-plus-square-o mr-2"
                        : "fa-plus-minus fa fa-minus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Schedule Information</span>
                </ListGroupItemHeading>
                <Collapse isOpen={this.state.isOpenSchedule}>
                  <ListGroupItemText>
                    {scheduleinfo.map((item, index) => (
                      <React.Fragment key={index}>
                        <small className="text-muted mr-3 mt-5">
                          <b>{item.title} : </b>
                        </small>
                        <small className="text-muted">{item.value}</small>
                        <hr style={{ marginTop: "0.1rem" }} />
                      </React.Fragment>
                    ))}
                  </ListGroupItemText>
                </Collapse>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="mt-3">
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleWorkFlow()}
                >
                  <i
                    className={
                      this.state.isplusclass2
                        ? "fa-plus-minus fa fa-plus-square-o mr-2"
                        : "fa-plus-minus fa fa-minus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Workflow Information</span>
                </ListGroupItemHeading>
                <Collapse isOpen={this.state.isWorkflowSchedule}>
                  <ListGroupItemText>
                    {workflowinfo.map((item, index) => (
                      <React.Fragment key={index}>
                        <small className="text-muted mr-3">
                          <b>{item.title} : </b>
                        </small>
                        <small className="text-muted">{item.value}</small>
                        <hr style={{ marginTop: "0.1rem" }} />
                      </React.Fragment>
                    ))}
                  </ListGroupItemText>
                </Collapse>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className="mt-3">
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleAuditInfo()}
                >
                  <i
                    className={
                      this.state.isplusclass3
                        ? "fa-plus-minus fa fa-plus-square-o mr-2"
                        : "fa-plus-minus fa fa-minus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Audit Information</span>
                </ListGroupItemHeading>
                <Collapse isOpen={this.state.isAuditSchedule}>
                  <ListGroupItemText>
                    {auditinfo.map((item, index) => (
                      <React.Fragment key={index}>
                        <small className="text-muted mr-3">
                          <b>{item.title} : </b>
                        </small>
                        <small className="text-muted">{item.value}</small>
                        <hr style={{ marginTop: "0.1rem" }} />
                      </React.Fragment>
                    ))}
                  </ListGroupItemText>
                </Collapse>
              </ListGroupItem>
            </ListGroup>
>>>>>>> 880aab3e0966f82442dfb3ddcfa6a2ac1b841ee3
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RecoardInformation;
