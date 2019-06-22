import React, { Component } from "react";
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
import { Row, Col } from "reactstrap";
import projectwiki_database from "../../database/projectwiki_database";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import issuewiki_database from "../../database/issuewiki_database";
import changewiki_database from "../../database/changewiki_database";
import database from "../../database/database";
import { routesURL } from "../../constant/routesURL";

class ProjectWiki extends Component {
  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    const { id } = this.props.match.params;
    const project = database.projects.filter(item => `${item.id}` === id);
    if (project.length === 0) {
      return (window.location.hash = routesURL.DASHBOARD);
    }
    
    const tasks = projectwiki_database;
    const { record_information } = database;
    const { deliverablesInfo } = deliverableswiki_database;
    const { basicProjectInfo, activity } = project[0].projectwiki;
    const { issues } = issuewiki_database;
    const { changes } = changewiki_database;
    
    console.log("project",basicProjectInfo);
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
          isMenu={{
            deliverable: false,
            work_package: false,
            approved_status: false
          }}
        />
        <div className="animated fadeIn row">
          {/* flex-row-reverse align-items-start */}
          <div className="col-12 col-lg-8">
            <Row>
              <Col xs="12">
                <BasicInformation
                  projectID={id}
                  basicProjectInfo={basicProjectInfo}
                />
              </Col>
              <Col xs="12">
                <Activities activity={activity} />
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
                <IssueChanges issues={issues} changes={changes} />
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
