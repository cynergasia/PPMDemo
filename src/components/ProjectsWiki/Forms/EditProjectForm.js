/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { TabContent, TabPane } from "reactstrap";
import EditProjectInformation from "./EditProjectInformation";
import EditTeamMembersForm from "./EditTeamMembersForm";
import EditClassificationForm from "./EditClassificationForm";

class EditProjectForm extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.toggle();
  };
  render() {
    const { activeTab } = this.state;
    return (
      <React.Fragment>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a
              data-toggle="tab"
              className={`${
                activeTab === "1" ? "active nav-link" : "nav-link"
              }`}
              onClick={() => this.toggle("1")}
            >
              {" "}
              Project Information
            </a>
          </li>

          <li className="nav-item">
            <a
              data-toggle="tab"
              className={`${
                activeTab === "2" ? "active nav-link" : "nav-link"
              }`}
              onClick={() => this.toggle("2")}
            >
              Team Members
            </a>
          </li>
          <li className="nav-item">
            <a
              data-toggle="tab"
              className={`${
                activeTab === "3" ? "active nav-link" : "nav-link"
              }`}
              onClick={() => this.toggle("3")}
            >
              Classification
            </a>
          </li>
        </ul>

        <TabContent activeTab={activeTab} className="border-0">
          <TabPane tabId="1">
            <EditProjectInformation
              projectInfo={this.props.projectInfo}
              onSubmit={this.onSubmit}
            />
          </TabPane>

          <TabPane tabId="2">
            <EditTeamMembersForm
              teamMembers={this.props.teamMembers}
              onSubmit={this.onSubmit}
            />
          </TabPane>

          <TabPane tabId="3">
            <EditClassificationForm
              classification={this.props.classification}
              onSubmit={this.onSubmit}
            />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default EditProjectForm;
