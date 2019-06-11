import React, { Component } from "react";
import ProjectWikiMenu from "../SubMenu/ProjectWikiMenu";
import BasicInformation from "../../components/ProjectsWiki/BasicInformation";
import RecoardInformation from "../../components/RecoardInformation";
import Activities from "../../components/ProjectsWiki/Activities";
import Attachments from "../../components/Attachments";
import WorkPackages from "../../components/ProjectsWiki/WorkPackages";
import IssueChanges from "../../components/ProjectsWiki/IssueChanges";
import Meetings from "../../components/ProjectsWiki/Meetings";
import Financial from "../../components/ProjectsWiki/Financial";
import Risks from "../../components/ProjectsWiki/Risks";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";
import { Row, Col } from "reactstrap";

class ProjectWiki extends Component {
  sidebar = null;

  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    setTimeout(this.fixSidebar, 80);
  }

  fixSidebar = () => {
    this.sidebar = new StickySidebar(".sidebar", {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner"
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <ProjectWikiMenu
                refs={{
                  issueChangesRef: this.issueChangesRef,
                  workPackageRef: this.workPackageRef,
                  meetingMinutesRef: this.meetingMinutesRef,
                  financialsRef: this.financialsRef,
                  activityLogRef: this.activityLogRef
                }}
              />
            </Col>
          </Row>

          <div className="row flex-row-reverse align-items-start main-content">
            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecoardInformation />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Row>
                <Col xs="12">
                  <BasicInformation />
                </Col>
                <Col xs="12">
                  <Activities />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>
                <div className="col-12" ref={this.workPackageRef}>
                  <WorkPackages />
                </div>
                <div className="col-12" ref={this.issueChangesRef}>
                  <IssueChanges />
                </div>
                <div className="col-12" ref={this.meetingMinutesRef}>
                  <Meetings />
                </div>
                <div className="col-12" ref={this.financialsRef}>
                  <Financial />
                </div>
                <Col xs="12">
                  <Risks />
                </Col>
                <div className="col-12" ref={this.activityLogRef}>
                  <ActivityLog />
                </div>
              </Row>
            </div>
          </div>

          <Row />
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectWiki;
