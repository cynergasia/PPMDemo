import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import IssueWikiMenu from "../SubMenu/IssueWikiMenu";
import SubMenu from "../SubMenu/Submenu";
import IssueDescription from "../../components/IssueWiki/IssueDescription";
import RecordInformation from "../../components/RecordInformation";
import IssueActivities from "../../components/IssueWiki/IssueActivities";
import Attachments from "../../components/Attachments";
import IssueApprovalStatus from "../../components/IssueWiki/IssueApprovalStatus";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";
import deliverableswiki_database from "../../database/deliverableswiki_database";
import issuewiki_database from "../../database/issuewiki_database";

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
    const { issueDescription, record_information } = issuewiki_database;
    return (
      <React.Fragment>
        <IssueWikiMenu
          refs={{
            attachmentRef: this.attachmentRef,
            approvedStatusRef: this.approvedStatusRef,
            activityLogRef: this.activityLogRef
          }}
        />
        
        
        <div className="animated fadeIn">
          <div className="row flex-row-reverse align-items-start main-content">
            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecordInformation
                    record_information={record_information}
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
