import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Table,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import Modal from "../../helper/Modal";
import EditProjectForm from "./Forms/EditProjectForm";

const intialState = {
  isProjectInfo: false,
  //isProjectDetail: false,
  isTeamMember: false,
  isClassification: false,
  isplusclass1: false,
  //isplusclass2: false,
  isplusclass3: false,
  isplusclass4: false
};

class BasicInformation extends Component {
  state = { ...intialState };
  state = {
    data: [],
    modal: false,
    basicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders.",
    editBasicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders."
  };

  componentDidMount = () => {
    this.setState({ data: this.props.basicProjectInfo.projectInfo });
  };
  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  toggleInfo = () => {
    this.setState({
      ...intialState,
      isProjectInfo: !this.state.isProjectInfo,
      isplusclass1: !this.state.isplusclass1
    });
  };
  toggleTeamMember = () => {
    this.setState({
      ...intialState,
      isTeamMember: !this.state.isTeamMember,
      isplusclass3: !this.state.isplusclass3
    });
  };
  toggleClassification = () => {
    this.setState({
      ...intialState,
      isClassification: !this.state.isClassification,
      isplusclass4: !this.state.isplusclass4
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () =>
    this.setState({
      basicProjectInfo: this.state.editBasicProjectInfo,
      modal: false
    });

  render() {
    const { modal } = this.state;
    const { teamMembers, classification } = this.props.basicProjectInfo;
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
    } = this.props.basicProjectInfo.projectInfo;

    const modelBody = (
      <EditProjectForm
        projectInfo={this.props.basicProjectInfo.projectInfo}
        teamMembers={teamMembers}
        toggle={this.toggle}
        classification={classification}
      />
    );
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Basic Project Information
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" onClick={this.toggle} />
              </span>
              <Modal
                isOpen={modal}
                toggle={this.toggle}
                header="Edit Basic Project Information"
                body={modelBody}
                size="xl"
              />
            </div>
          </CardHeader>
          <CardBody>
            {/* <pre className="m-0">{basicProjectInfo}</pre> className="project-wiki-basicinfo"  */}

            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleInfo()}
                >
                  <i
                    className={
                      this.state.isplusclass1
                        ? "fa-plus-minus fa fa-minus-square-o mr-2"
                        : "fa-plus-minus fa fa-plus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Project Information</span>
                </ListGroupItemHeading>
                <ListGroupItemText>
                  <Collapse isOpen={this.state.isplusclass1}>
                    <Table responsive bordered>
                      <tbody>
                        <tr>
                          <td className="basicinfo text-left">
                            <div>Project Number </div>
                          </td>
                          <td className="text-left">
                            <div>{this.props.projectID}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>Project Name </div>
                          </td>
                          <td className="text-left">
                            <div>{projectName}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="basicinfo text-left">
                            <div>Project Type </div>
                          </td>
                          <td className="text-left">
                            <div>{projectType}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>Opportunity Number </div>
                          </td>
                          <td className="text-left">
                            <div>{opportunity_number}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="basicinfo text-left">
                            <div>Organization </div>
                          </td>
                          <td className="text-left">
                            <div>{organization}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>Federal Project </div>
                          </td>
                          <td className="text-left">
                            <div>{federal_project}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="basicinfo text-left">
                            <div>Currency </div>
                          </td>
                          <td className="text-left">
                            <div>{currency}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>Partnering Needed </div>
                          </td>
                          <td className="text-left">
                            <div>{partnering_needed}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="basicinfo text-left">
                            <div>Stage </div>
                          </td>
                          <td className="text-left">
                            <div>{stage}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>Project Manager </div>
                          </td>
                          <td className="text-left">
                            <div>{project_manager}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="basicinfo text-left">
                            <div>Project Approver </div>
                          </td>
                          <td className="text-left">
                            <div>{project_approver}</div>
                          </td>
                          <td className="basicinfo text-left">
                            <div>P&L Manager </div>
                          </td>
                          <td className="text-left">
                            <div>{pl_manager}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="basicinfo text-left">
                            <div>Region </div>
                          </td>
                          <td className="text-left">
                            <div>{region}</div>
                          </td>
                          <td className="basicinfo text-left" rowSpan="2">
                            <div>Available to Copy </div>
                          </td>
                          <td className="text-left" rowSpan="2">
                            <div>{available_to_copy}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className="basicinfo text-left">
                            <div>Type </div>
                          </td>
                          <td className="text-left">
                            <div>{type}</div>
                          </td>
                        </tr>

                        <tr>
                          <td className=" basicinfo text-left">
                            Project Details
                          </td>
                          <td colSpan="3">{description}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Collapse>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>

            {/* Team Members */}
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleTeamMember()}
                >
                  <i
                    className={
                      this.state.isplusclass3
                        ? "fa-plus-minus fa fa-minus-square-o mr-2"
                        : "fa-plus-minus fa fa-plus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Team Members</span>
                </ListGroupItemHeading>

                <ListGroupItemText>
                  <Collapse isOpen={this.state.isplusclass3}>
                    <Table
                      hover
                      responsive
                      className="table-outline mb-0 d-none d-sm-table"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-left">Person</th>
                          <th className="text-left">Role</th>
                          <th className="text-left">Start Date</th>
                          <th className="text-left">End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map((item, index) => (
                          <tr key={index}>
                            <td className="text-left">
                              <div>{item.person}</div>
                            </td>
                            <td className="text-left">
                              <div>{item.role} </div>
                            </td>
                            <td className="text-left">
                              <div>{item.start_date} </div>
                            </td>
                            <th className="text-left">{item.end_date}</th>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Collapse>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleClassification()}
                >
                  <i
                    className={
                      this.state.isplusclass4
                        ? "fa-plus-minus fa fa-minus-square-o mr-2"
                        : "fa-plus-minus fa fa-plus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Classification</span>
                </ListGroupItemHeading>
                <ListGroupItemText>
                  <Collapse isOpen={this.state.isplusclass4}>
                    <Table
                      hover
                      responsive
                      className="table-outline mb-0 d-none d-sm-table"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="text-left">Category</th>
                          <th className="text-left">Value</th>
                          <th className="text-left">Start Date</th>
                          <th className="text-left">End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classification.map((item, index) => (
                          <tr key={index}>
                            <td className="text-left">
                              <div>{item.category} </div>
                            </td>
                            <td className="text-left">
                              <div>{item.value}</div>
                            </td>
                            <td className="text-left">
                              <div>{item.start_date}</div>
                            </td>
                            <td className="text-left">
                              <div>{item.end_date}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Collapse>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
