import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TaskWikiMenu from "../SubMenu/TaskWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import TaskInformation from "../../components/TaskWiki/TaskInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";

class TaskWiki extends Component {
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
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <TaskWikiMenu />
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
                  <TaskInformation />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>

                {/* <Col xs="12">
                  <Comments />
                </Col> */}
                <Col xs="12">
                  <ActivityLog title="Task ActivityLog" />
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

export default TaskWiki;
