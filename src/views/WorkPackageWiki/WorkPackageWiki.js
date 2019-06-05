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

class WorkPackageWiki extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <WorkPackageWikiMenu />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Row>
                <Col sm="12" md="12" lg="12">
                  <WorkPackageInformation />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <WorkPackageActivities />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Attachments />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Comments />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <WorkPackageIssueChanges />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <WorkPackageDeliverables />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <WorkPackageMeeting />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <ActivityLog title="WorkPackage ActivityLog" />
                </Col>
              </Row>
            </Col>
            <Col sm="12" md="12" lg="4">
              <RecoardInformation />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPackageWiki;
