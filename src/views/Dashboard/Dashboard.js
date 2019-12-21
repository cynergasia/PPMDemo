import React, { Component } from "react";
import Project from "../CommonsComponents/MyProject/Project";
import { Row, Col } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import Summary from "../CommonsComponents/Summary/Summary";
import Risks from "../CommonsComponents/RiskGraph/Risks";
import IssueRegister from "../CommonsComponents/IssueRegister/IssueRegister";
import ChangeRegister from "../CommonsComponents/ChangeRegister/ChangeRegister";
import Calendar from "../CommonsComponents/Calender/Calendar";
import ActivityRegister from "../CommonsComponents/ActivityRegister/ActivityRegister";
import Deliverables from "../CommonsComponents/Deliverables/Deliverables";
import FinancialAnalysis from "../CommonsComponents/EffortAnalysis/FinancialAnalysis";
import FinancialStatus from "../CommonsComponents/FinancialStatus/FinancialStatus";
import ProjectList from "./../CommonsComponents/ProjectList/ProjectList";
import database from "../../database/database.json";
import { routesURL } from "../../constant/routesURL";
import { Link } from "react-router-dom";
import Backlog from "./../Backlog/TeamMember/Backlog";

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

class Dashboard extends Component {
  state = {
    portfolio: "My Portfolio"
  };

  role = () => localStorage.getItem("role");

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  changePortfolio = portfolio => this.setState({ portfolio });

  render() {
    console.info("[Dashboard.js] role ======>", this.role());

    const project = database.projectlist;
    const { portfolio } = this.state;
    return (
      <>
        {this.role() === "member" ? (
          <Backlog />
        ) : (
          <React.Fragment>
            {/* <Menu changePortfolio={this.changePortfolio} /> */}
            <nav className="sub-navbar" aria-label="breadcrumb">
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-6 d-flex">
                  <h4 className="customer-title">Portfolio</h4>
                  <ol className="breadcrumb left-breadcrumb">
                    <Link exact="true" to={routesURL.PORTFOLIO}>
                      <span className="fa fa-cog ml-3"></span>
                    </Link>
                    {database.portfolio.map((item, index) => (
                      <li
                        className="nav-head active"
                        aria-current="page"
                        key={index}
                      >
                        {/* <Link exact="true" to={routesURL.PORTFOLIO}> */}
                        <span
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={() => this.changePortfolio(item.name)}
                        >
                          <u>{item.name}</u>
                        </span>
                        {/* </Link> */}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </nav>
            <div className="animated fadeIn">
              {/* MyProject and Financial status  */}
              <Row>
                <Col xs="12" md="12" lg="6">
                  {portfolio === "My Portfolio" && (
                    <ProjectList portfolio={portfolio} list={project} />
                  )}
                  {portfolio === "O&G Projects" && (
                    <ProjectList portfolio={"O&G Projects"} list={project} />
                  )}
                  {portfolio === "Transportation Projects" && (
                    <ProjectList
                      portfolio={"Transportation Projects"}
                      list={project}
                    />
                  )}
                </Col>
                <Col xs="12" md="12" lg="6">
                  {portfolio === "My Portfolio" && (
                    <Project portfolio={this.state.portfolio} />
                  )}
                  {portfolio === "O&G Projects" && (
                    <Project portfolio={"O&G Projects"} />
                  )}
                  {portfolio === "Transportation Projects" && (
                    <Project portfolio={"Transportation Projects"} />
                  )}
                </Col>
              </Row>
              <Row>
                <Summary />
              </Row>
              <Row>
                <Col xs="12" md="12" lg="6">
                  <Risks />
                </Col>
                <Col xs="12" md="12" lg="6">
                  <IssueRegister options={options} />
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

              <Row>
                <Col xs="12" md="12" lg="6">
                  <ActivityRegister options={options} />
                </Col>
                <Col xs="12" md="12" lg="6">
                  <Deliverables options={options} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12" lg="6">
                  <FinancialAnalysis />
                </Col>
                <Col xs="12" md="12" lg="6">
                  <FinancialStatus />
                </Col>
              </Row>
            </div>
          </React.Fragment>
        )}
      </>
    );
  }
}

export default Dashboard;
