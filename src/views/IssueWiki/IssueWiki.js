import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import IssueWikiMenu from "../SubMenu/IssueWikiMenu";
import IssueDescription from "../../components/IssueWiki/IssueDescription";
import RecoardInformation from "../../components/RecoardInformation";
import IssueActivities from "../../components/IssueWiki/IssueActivities";
import Attachments from "../../components/Attachments";
import IssueApprovalStatus from "../../components/IssueWiki/IssueApprovalStatus";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";
import deliverableswiki_database from "../../deliverableswiki_database";
import issuewiki_database from "../../issuewiki_database";

class IssueWiki extends Component {
  sidebar = null;

  attachmentRef = React.createRef();
  approvedStatusRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    setTimeout(this.fixSidebar, 320);
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
    const { activities } = deliverableswiki_database;
    const { issueDescription, recoard_information } = issuewiki_database;
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <IssueWikiMenu
                refs={{
                  attachmentRef: this.attachmentRef,
                  approvedStatusRef: this.approvedStatusRef,
                  activityLogRef: this.activityLogRef
                }}
              />
            </Col>
          </Row>

          <div className="row flex-row-reverse align-items-start main-content">
            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecoardInformation
                    recoard_information={recoard_information}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Row>
                <Col xs="12">
                  <IssueDescription issueDescription={issueDescription} />
                </Col>
                <Col xs="12">
                  <IssueActivities activities={activities} />
                </Col>
                <div className="col-12" ref={this.attachmentRef}>
                  <Attachments />
                </div>
                <div className="col-12" ref={this.approvedStatusRef}>
                  <IssueApprovalStatus />
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

export default IssueWiki;
