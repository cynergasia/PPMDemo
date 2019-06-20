import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import DeliverablesWikiMenu from "../SubMenu/DeliverablesWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import DeliverablesInformation from "../../components/DeliverablesWiki/DeliverablesInformation";
import DeliverablesActivities from "../../components/DeliverablesWiki/DeliverablesActivities";
// import Comments from "../../components/Comments";
import DeliverablesApprovalStatus from "../../components/DeliverablesWiki/DeliverablesApprovalStatus";
// import DeliverablesActivityLog from "../../components/DeliverablesWiki/DeliverablesActivityLog";
import deliverableswiki_database from "../../deliverableswiki_database";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";

class DeliverablesWiki extends Component {
  sidebar = null;

  approvedStatus = React.createRef();
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
    const { activities, recoard_information } = deliverableswiki_database;
    return (
      <React.Fragment>
        <DeliverablesWikiMenu
          refs={{
            approvedStatus: this.approvedStatus,
            activityLogRef: this.activityLogRef
          }}
        />
        <div className="animated fadeIn">
          <div className="row flex-row-reverse align-items-start main-content">
            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecoardInformation
                    recoard_information={recoard_information}
                    isWorkflowinfo={false}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Row>
                <Col xs="12">
                  <DeliverablesInformation />
                </Col>
                <Col xs="12">
                  <DeliverablesActivities activities={activities} />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>
                <div className="col-12" ref={this.approvedStatus}>
                  <DeliverablesApprovalStatus />
                </div>
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

export default DeliverablesWiki;
