import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import DeliverablesWikiMenu from "../SubMenu/DeliverablesWikiMenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import DeliverablesInformation from "../../components/DeliverablesWiki/DeliverablesInformation";
import DeliverablesActivities from "../../components/DeliverablesWiki/DeliverablesActivities";
// import Comments from "../../components/Comments";
import DeliverablesApprovalStatus from "../../components/DeliverablesWiki/DeliverablesApprovalStatus";
// import DeliverablesActivityLog from "../../components/DeliverablesWiki/DeliverablesActivityLog";
import deliverableswiki_database from "../../deliverableswiki_database";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";

class DeliverablesWiki extends Component {
  approvedStatus = React.createRef();
  activityLogRef = React.createRef();

  render() {
    const { id } = this.props.match.params;
    const {
      activities,

      deliverablesInfo
    } = deliverableswiki_database;
    const deliverInfo = deliverablesInfo.filter(item => item.d_id === id);
    if (deliverInfo.length === 0) {
      window.location.hash = "#/";
    }
    console.log(deliverInfo[0]);
    return (
      <React.Fragment>
        <DeliverablesWikiMenu
          refs={{
            approvedStatus: this.approvedStatus,
            activityLogRef: this.activityLogRef
          }}
        />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <Col xs="12">
                <DeliverablesInformation deliverInfo={deliverInfo[0]} />
              </Col>
              <Col xs="12">
                <DeliverablesActivities activities={activities} />
              </Col>

              <Col xs="12">
                <Attachments />
              </Col>
              <div className="col-12" ref={this.approvedStatus}>
                <DeliverablesApprovalStatus />
              </div>
              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="aside col-12 col-lg-4">
            <div className="aside-inner">
              <RecoardInformation
                recoard_information={deliverInfo[0].recoard_information}
                isScheduleinfo={false}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesWiki;
