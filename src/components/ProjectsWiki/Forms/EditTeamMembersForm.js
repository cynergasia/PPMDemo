import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import MemberForm from "../../Forms/BasicProjectInformation/MemberForm";

class EditTeamMembersForm extends Component {
  state = {
    teamMembers: [
      {
        person: "",
        role: "",
        startDate: new Date(),
        endDate: new Date()
      }
    ]
  };

  deleteMember = id => {
    let { teamMembers } = this.state;
    teamMembers.splice(id, 1);
    this.setState({ teamMembers });
  };

  addForm = () => {
    const { teamMembers } = this.state;
    const member = {
      person: "",
      role: "",
      startDate: new Date(),
      endDate: new Date()
    };
    teamMembers.push(member);
    this.setState({ teamMembers });
  };

  handleChangeMembers = (index, name, value) => {
    let { teamMembers } = this.state;
    teamMembers[index][name] = value;
    this.setState({ teamMembers });
  };

  componentDidMount() {
    let { teamMembers } = this.state;
    let newTeamMembers = this.props.teamMembers.map(item => ({
      person: item.person,
      role: item.role,
      startDate: new Date(item.start_date),
      endDate: new Date(item.end_date)
    }));
    teamMembers = newTeamMembers;
    this.setState({ teamMembers });
  }

  render() {
    const { teamMembers } = this.state;
    console.log(this.props.teamMembers);
    return (
      <React.Fragment>
        <div className="btn btn-primary mt-0" onClick={() => this.addForm()}>
          Add
        </div>
        {teamMembers.map((member, index) => (
          <MemberForm
            id={index}
            key={index}
            index={index}
            member={member}
            handleChangeMembers={this.handleChangeMembers}
            deleteMember={this.deleteMember}
          />
        ))}
        <Row>
          <Col lg="12">
            <div className="text-center">
              <Button color="danger">Close</Button>
              <Button
                color="primary"
                onClick={e => {
                  this.props.onSubmit(e);
                }}
              >
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EditTeamMembersForm;
