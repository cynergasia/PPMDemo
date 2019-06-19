import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import WorkPackageWikiMenu from "../SubMenu/WorkPackageWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
// import Comments from "../../components/Comments";
// import ActivityLog from "../../components/ActivityLog";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import WorkPackageInformation from "../../components/WorkPackageWiki/WorkPackageInformation";
import WorkPackageActivities from "../../components/WorkPackageWiki/WorkPackageActivities";
import WorkPackageIssueChanges from "../../components/WorkPackageWiki/WorkPackageIssueChanges";
import WorkPackageDeliverables from "../../components/WorkPackageWiki/WorkPackageDeliverables";
// import WorkPackageMeeting from "../../components/WorkPackageWiki/WorkPackageMeeting";
import Meetings from "../../components/ProjectsWiki/Meetings";
import StickySidebar from "sticky-sidebar";
import projectwiki_database from "../../projectwiki_database";
import workpackagewiki_database from "../../workpackagewiki_database";
import _omit from "lodash/omit";

class WorkPackageWiki extends Component {
  sidebar = null;

  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    this.fixSidebar();
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
    const { id } = this.props.match.params;
    const p = projectwiki_database[0].workPackages.filter(wp => wp.id === id);
    const { activities: a } = { ...p["0"] };
    const activities = a.map(item => _omit(item, ["type"]));
    const {
      workPackageInfo,
      issues,
      changes,
      deliverbales
    } = workpackagewiki_database;
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <WorkPackageWikiMenu
                refs={{
                  issueChangesRef: this.issueChangesRef,
                  workPackageRef: this.workPackageRef,
                  meetingMinutesRef: this.meetingMinutesRef,
                  activityLogRef: this.activityLogRef
                }}
                workPageRef={this.workPageRef}
              />
            </Col>
          </Row>

          <div className="row flex-row-reverse align-items-start main-content">
            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecoardInformation isWorkflowinfo={false} />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Row>
                <div className="col-12" ref={this.workPackageRef}>
                  <WorkPackageInformation workPackageInfo={workPackageInfo} />
                </div>
                <Col xs="12">
                  <WorkPackageActivities activities={activities} />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>

                {/* <Col lg="12">
                  <Comments />
                </Col> */}
                <div className="col-12" ref={this.issueChangesRef}>
                  <WorkPackageIssueChanges issues={issues} changes={changes} />
                </div>
                <div className="col-12">
                  <WorkPackageDeliverables deliverbales={deliverbales} />
                </div>
                <div className="col-12" ref={this.meetingMinutesRef}>
                  {/* <WorkPackageMeeting /> */}
                  <Meetings />
                </div>
                <div className="col-12" ref={this.activityLogRef}>
                  {/* <ActivityLog title="WorkPackage ActivityLog"  /> */}
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

export default WorkPackageWiki;
