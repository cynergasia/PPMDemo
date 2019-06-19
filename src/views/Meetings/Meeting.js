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

class Meeting extends Component {
  componentDidMount() {
    scrollTop();
  }

  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <MeetingMenu />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Row>
                <Col sm="12" md="12" lg="12">
                  <MeetingInformation />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <MeetingDescription />
                </Col>
              </Row>
            </Col>
            <Col sm="12" md="12" lg="4">
              <RecoardInformation />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Attachments />
            </Col>
            {/* <Col sm="12" md="12" lg="8">
              <Comments />
            </Col> */}
            <Col sm="12" md="12" lg="8">
              <ActivityLog title="Meeting ActivityLog" />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Meeting;
