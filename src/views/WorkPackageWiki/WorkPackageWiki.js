import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import WorkPackageWikiMenu from "../SubMenu/WorkPackageWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ActivityLog";
import WorkPackageInformation from "../../components/WorkPackageWiki/WorkPackageInformation";
import WorkPackageActivities from "../../components/WorkPackageWiki/WorkPackageActivities";
import WorkPackageIssueChanges from "../../components/WorkPackageWiki/WorkPackageIssueChanges";
import WorkPackageDeliverables from "../../components/WorkPackageWiki/WorkPackageDeliverables";
import WorkPackageMeeting from "../../components/WorkPackageWiki/WorkPackageMeeting";
import workpackagewiki_database from "../../workpackagewiki_database";
import StickySidebar from "sticky-sidebar";

class WorkPackageWiki extends Component {
  sidebar = null;

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
    const { activities } = workpackagewiki_database;
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <WorkPackageWikiMenu />
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
                  <WorkPackageInformation />
                </Col>
                <Col xs="12">
                  <WorkPackageActivities activities={activities} />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>

                <Col lg="12">
                  <Comments />
                </Col>
                <Col lg="12">
                  <WorkPackageIssueChanges />
                </Col>
                <Col lg="12">
                  <WorkPackageDeliverables />
                </Col>
                <Col lg="12">
                  <WorkPackageMeeting />
                </Col>
                <Col lg="12">
                  <ActivityLog title="WorkPackage ActivityLog" />
                </Col>
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
