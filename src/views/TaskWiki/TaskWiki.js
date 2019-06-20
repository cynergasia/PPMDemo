import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TaskWikiMenu from "../SubMenu/TaskWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import TaskInformation from "../../components/TaskWiki/TaskInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";
import taskwiki_database from "../../taskwiki_database";

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
    const { recoard_information } = taskwiki_database;
    return (
      <React.Fragment>
        <TaskWikiMenu />
        <div className="animated fadeIn">
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
