import React, { Component } from "react";
import Project from "../CommonsComponents/MyProject/Project";
import Menu from "../SubMenu/Menu";
import { Row, Col } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import Notification from "../CommonsComponents/Notification/Notification";
// import Summary from "../CommonsComponents/Summary/Summary";
// import Risks from "../CommonsComponents/RiskGraph/Risks";
// import IssueRegister from "../CommonsComponents/IssueRegister/IssueRegister";
import ChangeRegister from "../CommonsComponents/ChangeRegister/ChangeRegister";
import Calendar from "../CommonsComponents/Calender/Calendar";
// import ActivityRegister from "../CommonsComponents/ActivityRegister/ActivityRegister";
// import Deliverables from "../CommonsComponents/Deliverables/Deliverables";
// import FinancialAnalysis from "../CommonsComponents/EffortAnalysis/FinancialAnalysis";
// import FinancialStatus from "../CommonsComponents/FinancialStatus/FinancialStatus";
import ProjectList from "./../CommonsComponents/ProjectList/ProjectList";
import database from "../../database/database.json";

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  title: {
    position: "bottom"
  },
  legend: {
    display: false
  },
  maintainAspectRatio: true
};
class CustomerDashboard extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    const project = database.projectlist;
    return (
      <React.Fragment>
        <Menu />
        <div className="animated fadeIn">
          {/* MyProject and Financial status  */}
          <Row>
            <Col xs="12" md="12" lg="6">
              <ProjectList list={project} />
            </Col>
            <Col xs="12" md="12" lg="6">
              <Project />
              {/* <Notification /> */}
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="12" lg="6">
              {/* <Risks /> */}
            </Col>
            <Col xs="12" md="12" lg="6">
              {/* <IssueRegister options={options} /> */}
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="12" lg="6">
              <ChangeRegister options={options} />
            </Col>
            <Col xs="12" md="12" lg="6">
              <Calendar />
            </Col>
          </Row>

          {/* <Row>
            <Col xs="12" md="12" lg="6">
              <ActivityRegister options={options} />
            </Col>
            <Col xs="12" md="12" lg="6">
              <Deliverables options={options} />
            </Col>
          </Row> */}
          {/* <Row>
            <Col xs="12" md="12" lg="6">
              <FinancialAnalysis />
            </Col>
            <Col xs="12" md="12" lg="6">
              <FinancialStatus />
            </Col>
          </Row> */}
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerDashboard;
