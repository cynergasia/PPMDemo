import React, { Component } from "react";
import ProjectWikiMenu from "../SubMenu/ProjectWikiMenu";
import BasicInformation from "../../components/ProjectsWiki/BasicInformation";
import RecoardInformation from "../../components/ProjectsWiki/RecoardInformation";
import Activities from "../../components/ProjectsWiki/Activities";
import Attachments from "../../components/ProjectsWiki/Attachments";
import WorkPackages from "../../components/ProjectsWiki/WorkPackages";
import IssueChanges from "../../components/ProjectsWiki/IssueChanges";
import Meetings from "../../components/ProjectsWiki/Meetings";
import Financial from "../../components/ProjectsWiki/Financial";
import Risks from "../../components/ProjectsWiki/Risks";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import { Row, Col } from "reactstrap";

class ProjectWiki extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <ProjectWikiMenu />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Row>
                <Col sm="12" md="12" lg="12">
                  <BasicInformation />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Activities />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Attachments />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <WorkPackages />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <IssueChanges />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Meetings />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Financial />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Risks />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <ActivityLog />
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

export default ProjectWiki;
