import React, { Component } from "react";
import DeliverablesWikiMenu from "../SubMenu/DeliverablesWikiMenu";
import RecoardInformation from "../../components/ProjectsWiki/RecoardInformation";
import Attachments from "../../components/ProjectsWiki/Attachments";
import DeliverablesInformation from "../../components/DeliverablesWiki/DeliverablesInformation";
import DeliverablesActivities from "../../components/DeliverablesWiki/DeliverablesActivities";

import { Row, Col } from "reactstrap";

class DeliverablesWiki extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <DeliverablesWikiMenu />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="8">
              <Row>
                <Col sm="12" md="12" lg="12">
                  <DeliverablesInformation />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <DeliverablesActivities />
                </Col>
                <Col sm="12" md="12" lg="12">
                  <Attachments />
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

export default DeliverablesWiki;
