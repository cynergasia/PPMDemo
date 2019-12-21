import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Button } from "reactstrap";
import Activity from "./Activity";
import { MONTH, YEAR } from "../../../constant/index";
import PortfolioMenu from "../../SubMenu/PortfolioMenu";
import BacklogDetails from "./BacklogDetails";
import ReactTooltip from "react-tooltip";
import image5 from "../../../assets/img/avatars/5.jpg";
import $ from "jquery";

class Backlog extends Component {
  state = {
    showResources: false,
    activitydetail: true,
    month: "January-2015",
    currentActivity: "",
    unassignedActivity: "0",
    resource: "Suresh",
    newResource: []
  };
  member = () => localStorage.getItem("member");
  handleMonth = month => {
    this.setState({
      month: month
    });
  };
  addResource = state => {
    this.setState({
      newResource: [...this.state.newResource, state]
    });
  };
  showResources = () => {
    this.setState({
      showResources: !this.state.showResources,
      activitydetail: !this.state.activitydetail
    });
  };
  switchStateChanges = currentActivity => {
    this.setState({
      currentActivity
    });
  };
  switchUnassigned = state => {
    this.setState({
      unassignedActivity: state
    });
  };
  switchActivityChanges = state => {
    this.setState({
      activitydetail: state,
      showResources: false
    });
  };

  nextDate = () => {
    $("#selectionChamp option:selected")
      .next()
      .removeAttr("selected", "selected")
      .attr("selected", "selected");
  };
  prevDate = () => {
    $("#selectionChamp option:selected")
      .prev()
      .removeAttr("selected", "selected")
      .attr("selected", "selected");
  };
  render() {
    return (
      <React.Fragment>
        <PortfolioMenu link={"member"} member={this.member()} />
        <div className="animated fadeIn row mt-4">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <Card>
                  <CardHeader>Backlog</CardHeader>
                  <CardBody>
                    <div className="months">
                      <Row form className="mt-2">
                        <div className="mx-auto d-flex align-items-center">
                          <Button
                            id="fieldPrevious"
                            onClick={this.prevDate}
                            style={{ boxShadow: "none" }}
                            color="dark"
                          >
                            {"<<"}
                          </Button>
                          <select
                            disabled
                            id="selectionChamp"
                            onChange={e => {
                              let { month } = this.state;
                              month = e.target.value;
                              this.setState({ month });
                            }}
                            className="mx-2 form-control"
                          >
                            {YEAR.map(({ value: year }, index) =>
                              MONTH.map(({ value: month }, index) => (
                                <option
                                  key={`${month}-${year}`}
                                  value={`${month}-${year}`}
                                >{`${month}-${year}`}</option>
                              ))
                            )}
                          </select>
                          <Button
                            style={{ boxShadow: "none" }}
                            id="fieldNext"
                            onClick={this.nextDate}
                            color="dark"
                          >
                            {">>"}
                          </Button>
                        </div>
                      </Row>
                    </div>
                    <div className="resources mt-3 ">
                      <span className="mr-2" style={{ cursor: "pointer" }}>
                        <ReactTooltip id="raj" type="info">
                          {this.member()}
                        </ReactTooltip>
                        <img
                          data-tip
                          data-for="raj"
                          src={image5}
                          className="rounded-circle"
                          alt="Cinque Terre"
                          width="30"
                          height="30"
                        />
                      </span>
                    </div>
                    <div className="activities mt-3">
                      <Activity
                        switchActivityChanges={this.switchActivityChanges}
                        activity={this.switchStateChanges}
                        month={this.state.month}
                        unassigned={this.switchUnassigned}
                        resource={this.state.resource}
                        unassignedActivity={this.state.unassignedActivity}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
          <div className="aside col-12 col-lg-4" style={{ top: "4rem" }}>
            <BacklogDetails
              addResource={this.addResource}
              activitydetail={this.state.activitydetail}
              showResources={this.state.showResources}
              currentActivity={this.state.currentActivity}
              unassignedActivity={this.state.unassignedActivity}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Backlog;
