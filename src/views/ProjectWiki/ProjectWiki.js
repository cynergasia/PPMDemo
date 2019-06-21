import React, { Component } from "react";
import ProjectWikiMenu from "../SubMenu/ProjectWikiMenu";
import SubMenu from "../SubMenu/Submenu";
import BasicInformation from "../../components/ProjectsWiki/BasicInformation";
import RecordInformation from "../../components/RecordInformation";
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
import projectwiki_database from "../../projectwiki_database";
import deliverableswiki_database from "../../deliverableswiki_database";
import database from "../../database";

class ProjectWiki extends Component {
  sidebar = null;

  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    setTimeout(this.fixSidebar, 320);
  }

  fixSidebar = () => {
    // this.sidebar = new StickySidebar(".sidebar", {
    //   topSpacing: 0,
    //   bottomSpacing: 0,
    //   containerSelector: ".main-content",
    //   innerWrapperSelector: ".sidebar__inner"
    // });
  };

  render() {
    const tasks = projectwiki_database;
    const { record_information } = database;
    const { deliverablesInfo } = deliverableswiki_database;

    return (
      <React.Fragment>
        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            financialsRef: this.financialsRef,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{ deliverable: false,work_package:false,submit:false }}
        />
        <div className="animated fadeIn row">
          {/* flex-row-reverse align-items-start */}
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
                <WorkPackages
                  tasks={tasks}
                  deliverablesInfo={deliverablesInfo}
                />
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

          <div className="aside col-12 col-lg-4">
            <div className="aside-inner">
              <RecordInformation record_information={record_information} />
            </div>
          </div>
          {/* sidebar */}
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectWiki;
