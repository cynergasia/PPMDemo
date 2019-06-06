import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TaskWikiMenu from "../SubMenu/TaskWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import TaskInformation from "../../components/TaskWiki/TaskInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ActivityLog";

class TaskWiki extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <TaskWikiMenu />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Row>
                <Col sm="12" md="12" lg="12">
                  <TaskInformation />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Attachments />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Comments />
                </Col>
              </Row>
            </Col>
            <Col sm="12" md="12" lg="4">
              <RecoardInformation />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <ActivityLog title="Task ActivityLog" />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskWiki;
