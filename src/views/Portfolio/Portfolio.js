import React, { Component } from "react";
import { Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import PortfolioCriteria from "../../components/Portfolio/PortfolioCriteria";
import ProjectList from "../../components/Portfolio/ProjectList";
import MyPortfolio from "../../components/Portfolio/MyPortfolio";
import database from "../../database/database.json";
import PortfolioMenu from "../SubMenu/PortfolioMenu";

class Portfolio extends Component {
  defaultPortfolio = {
    name: "",
    description: "",
    dynamic: "",
    public: "",
    default: ""
  };

  state = {
    portfolio: "My Portfolio",
    showCriteria: false,
    dynamic: "",
    form: { ...this.defaultPortfolio },
    rows: []
  };

  componentDidMount = () => {
    this.addData();
  };

  handleClick = (dynamic, name) => {
    this.changeCriteria();
    this.changeForm(dynamic);
    this.changePortfolio(name);
  };

  addData = () => {
    const initRows = [];
    const projectdata = database.portfolio;
    if (projectdata.length > 0) {
      projectdata.forEach(({ name, description, dynamic, pub, def }) => {
        initRows.push({
          name,
          description,
          dynamic,
          pub,
          def,
          clickEvent: f => this.handleClick(dynamic, name)
        });
      });
    }

    this.setState({ rows: initRows });
  };

  changeCriteria = () => this.setState({ showCriteria: true });
  changeForm = dynamic => this.setState({ dynamic: dynamic });
  changePortfolio = port => this.setState({ portfolio: port });

  onSubmit = e => {
    e.preventDefault();
    const { rows, form } = this.state;
    rows.push({
      ...form,
      clickEvent: f => this.handleClick(form.dynamic, form.name)
    });
    this.setState({ rows, form: { ...this.defaultPortfolio } });
  };

  render() {
    const { showCriteria, dynamic, portfolio, rows } = this.state;

    return (
      <React.Fragment>
        <PortfolioMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            projectInfoRef: this.projectInfoRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            financialsRef: this.financialsRef,
            activityLogRef: this.activityLogRef,
            riskStatusRef: this.riskStatusRef
          }}
          isMenu={{
            deliverable: false,
            work_package: false,
            approved_status: false,
            deliverableInfo: false,
            approvedStatus: false,
            meetingInfo: false,
            taskInfo: false
          }}
          link={"portfolio"}
        />
        <div className="animated fadeIn row mt-4">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <MyPortfolio
                  changeForm={this.changeForm}
                  changeCriteria={this.changeCriteria}
                  changePortfolio={this.changePortfolio}
                  {...{ rows }}
                />
              </div>
              {showCriteria === true && (
                <div className="col-12">
                  <PortfolioCriteria status={dynamic} />
                </div>
              )}
              <div className="col-12">
                {portfolio === "My Portfolio" && this.state.dynamic === "N" && (
                  <ProjectList
                    changePortfolio={this.changePortfolio}
                    portfolio={this.state.portfolio}
                  />
                )}
                {portfolio === "Transportation Projects" &&
                  this.state.dynamic === "N" && (
                    <ProjectList
                      changePortfolio={this.changePortfolio}
                      portfolio={this.state.portfolio}
                    />
                  )}
                {portfolio === "O&G Projects" && this.state.dynamic === "N" && (
                  <ProjectList
                    changePortfolio={this.changePortfolio}
                    portfolio={this.state.portfolio}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="aside col-12 col-lg-4" style={{ top: "1.5rem" }}>
            <div className="aside-inner">
              <Card>
                <CardHeader>Add Portfolio</CardHeader>
                <CardBody>
                  <form onSubmit={this.onSubmit}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter Portfolio Name"
                      value={this.state.form.name}
                      onChange={e => {
                        let { form: newPortfolio } = this.state;
                        newPortfolio.name = e.target.value;
                        this.setState({ newPortfolio });
                      }}
                    />
                    <Input
                      type="textarea"
                      rows="2"
                      name="description"
                      className="mt-2"
                      placeholder="Description"
                      value={this.state.form.description}
                      onChange={e => {
                        let { form: newPortfolio } = this.state;
                        newPortfolio.description = e.target.value;
                        this.setState({ newPortfolio });
                      }}
                    />
                    <Input
                      onChange={e => {
                        let { form: newPortfolio } = this.state;
                        newPortfolio.dynamic = e.target.value;
                        this.setState({ newPortfolio });
                      }}
                      type="select"
                      className="mt-2"
                      name="dynamic"
                    >
                      <option disabled selected>
                        Dynamic
                      </option>
                      <option>Y</option>
                      <option>N</option>
                    </Input>
                    <Input
                      onChange={e => {
                        let { form: newPortfolio } = this.state;
                        newPortfolio.public = e.target.value;
                        this.setState({ newPortfolio });
                      }}
                      type="select"
                      className="mt-2"
                      name="public"
                    >
                      <option disabled selected>
                        Public
                      </option>
                      <option>Y</option>
                      <option>N</option>
                    </Input>
                    <Input
                      type="select"
                      onChange={e => {
                        let { form: newPortfolio } = this.state;
                        newPortfolio.default = e.target.value;
                        this.setState({ newPortfolio });
                      }}
                      className="mt-2"
                      name="default"
                    >
                      <option disabled selected>
                        Default
                      </option>
                      <option>Y</option>
                      <option>N</option>
                    </Input>
                    <div className="mt-1">
                      <Button
                        color="success"
                        onClick={this.onSubmit}
                        size="sm"
                        type="submit"
                        className="mr-2 float-right"
                      >
                        Add
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
