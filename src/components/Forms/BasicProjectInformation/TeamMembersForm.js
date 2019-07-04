import React, { Component } from "react";
import MemberForm from "./MemberForm";
import { Row, Col, Button } from "reactstrap";

class TeamMembersForm extends Component {
  state = {
    teamMembers: [
      {
        id: 1,
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
      id: Math.floor(Math.random() * Math.floor(100)),
      person: "",
      role: "",
      startDate: new Date(),
      endDate: new Date()
    };
    teamMembers.push(member);
    this.setState({ teamMembers });
  };

  handleChangeMembers = (index, name, value) => {
    console.log(name, value);
    let { teamMembers } = this.state;
    teamMembers[index][name] = value;
    this.setState({ teamMembers });
  };

  render() {
    const { teamMembers } = this.state;

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
              <Button color="primary">Save</Button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TeamMembersForm;
