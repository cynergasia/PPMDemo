import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Button } from "reactstrap";
import Activity from "./Activity";
import { MONTH, YEAR } from "../../constant/index";
import PortfolioMenu from "../SubMenu/PortfolioMenu";
import BacklogDetails from "./BacklogDetails";
import defaultImg from "../../assets/img/avatars/default.jpg";
import ReactTooltip from "react-tooltip";
import image2 from "../../assets/img/avatars/2.jpg";
import image3 from "../../assets/img/avatars/3.jpg";
import image4 from "../../assets/img/avatars/4.jpg";
import image5 from "../../assets/img/avatars/5.jpg";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
import $ from "jquery";
import database from "../../database/backlog_database.json";

class Backlog extends Component {
  state = {
    showResources: false,
    activitydetail: true,
    month: "January-2020",
    currentActivity: "A1.02.01(Prelim Design)",
    unassignedActivity: "",
    resource: "Suresh",
    newResource: []
  };
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
      .attr("selected", "selected")
      .prev()
      .removeAttr("selected", "selected");
  };
  prevDate = () => {
    $("#selectionChamp option:selected")
      .prev()
      .removeAttr("selected", "selected")
      .attr("selected", "selected")
      .next()
      .removeAttr("selected", "selected");
  };
  render() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <PortfolioMenu id={id} link={"backlog"} />
        <div className="animated fadeIn row mt-4">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <Card>
                  <CardHeader>
                    Backlog - <Link to={routesURL.PROJECT_WIKI + id}>{id}</Link>
                  </CardHeader>
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
                        <ReactTooltip id="unassigned" type="info">
                          Unassigned
                        </ReactTooltip>
                        <img
                          data-tip
                          data-for="unassigned"
                          onError={e => (e.target.src = defaultImg)}
                          src="http://www.example.com"
                          className="rounded-circle"
                          width="30"
                          height="30"
                          alt=""
                        />
                      </span>
                      {/* {database.Resources.map(res => {
                        return (
                          <span className="mr-2" style={{ cursor: "pointer" }}>
                            <ReactTooltip id={res.name} type="info">
                              {res.name}
                            </ReactTooltip>
                            <img
                              data-tip
                              data-for={res.name}
                              src={image3}
                              className="rounded-circle"
                              alt="Cinque Terre"
                              width="30"
                              height="30"
                            />
                          </span>
                        );
                      })} */}
                      {database.Resource.map(data => {
                        return (
                          <span
                            key={data.name}
                            onClick={() =>
                              this.setState({
                                resource: data.name
                              })
                            }
                            className="mr-2"
                            style={{ cursor: "pointer" }}
                          >
                            <ReactTooltip id={data.name} type="info">
                              {data.name}
                            </ReactTooltip>
                            <img
                              data-tip
                              data-for={data.name}
                              src={image2}
                              className="rounded-circle"
                              alt="Cinque Terre"
                              width="30"
                              height="30"
                            />
                          </span>
                        );
                      })}
                      {this.state.newResource.map(res => (
                        <>
                          <span className="mr-2" style={{ cursor: "pointer" }}>
                            <ReactTooltip id={res} type="info">
                              {res}
                            </ReactTooltip>
                            <img
                              data-tip
                              data-for={res}
                              src={image2}
                              className="rounded-circle"
                              alt="Cinque Terre"
                              width="30"
                              height="30"
                            />
                          </span>
                        </>
                      ))}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={this.showResources}
                      >
                        {" "}
                        <b> ... </b>
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
