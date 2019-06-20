import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MeetingMenu from "../SubMenu/MeetingMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import MeetingInformation from "../../components/Meeting/MeetingInformation";
import MeetingDescription from "../../components/Meeting/MeetingDescription";
import { scrollTop } from "../../utils";
import meeting_database from "../../meeting_database";

class Meeting extends Component {
  sidebar = null;
  componentDidMount() {
    scrollTop();
  }

  render() {
    const { recoard_information } = meeting_database;
    return (
      <React.Fragment>
        <MeetingMenu />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <Col xs="12">
                <MeetingInformation />
              </Col>
              <Col xs="12">
                <MeetingDescription />
              </Col>

              <Col xs="12">
                <Attachments />
              </Col>

              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecoardInformation
                  recoard_information={recoard_information}
                  isScheduleinfo={false}
                  isWorkflowinfo={false}
                />
              </div>
            </div>
          </div>
        </div>

        <Row />
      </React.Fragment>
    );
  }
}

export default Meeting;
