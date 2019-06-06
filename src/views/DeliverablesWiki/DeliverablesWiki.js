import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import DeliverablesWikiMenu from "../SubMenu/DeliverablesWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import DeliverablesInformation from "../../components/DeliverablesWiki/DeliverablesInformation";
import DeliverablesActivities from "../../components/DeliverablesWiki/DeliverablesActivities";
import Comments from "../../components/Comments";
import DeliverablesApprovalStatus from "../../components/DeliverablesWiki/DeliverablesApprovalStatus";
import DeliverablesActivityLog from "../../components/DeliverablesWiki/DeliverablesActivityLog";

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
          <Row>
            <Col sm="12" md="12" lg="8">
              <Comments />
            </Col>
            <Col sm="12" md="12" lg="8">
              <DeliverablesApprovalStatus />
            </Col>
            <Col sm="12" md="12" lg="8">
              <DeliverablesActivityLog />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesWiki;
