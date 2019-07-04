/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { TabContent, TabPane } from "reactstrap";
import ProjectInformationForm from "./ProjectInformationForm";
import TeamMembersForm from "./TeamMembersForm";
import ClassificationForm from "./ClassificationForm";

class ProjectForm extends Component {
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
    this.props.onSubmit();
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
            <ProjectInformationForm onSubmit={this.onSubmit} />
          </TabPane>

          <TabPane tabId="2">
            <TeamMembersForm />
          </TabPane>

          <TabPane tabId="3">
            <ClassificationForm />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default ProjectForm;
