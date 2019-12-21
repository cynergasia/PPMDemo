import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import image2 from "../../assets/img/avatars/2.jpg";
import database from "../../database/backlog_database.json";

class BacklogDetails extends Component {
  state = {
    project: {}
  };

  initComponentData = prevProps => {
    if (
      !prevProps ||
      prevProps.currentActivity !== this.props.currentActivity
    ) {
      let selectedItem;
      database.Resource.map(({ Activity, name }) => {
        const currentItem = Activity.filter(
          item => item.name === this.props.currentActivity
        );
        if (currentItem.length > 0) {
          selectedItem = currentItem[0];
        }
      });
      this.setState({
        project: { ...selectedItem }
      });
    } else if (
      !prevProps ||
      prevProps.unassignedActivity !== this.props.unassignedActivity
    ) {
      let selectedItem;
      database.UnassignedResources.map(({ Activity, name }) => {
        const currentItem = Activity.filter(
          item => item.name === this.props.unassignedActivity
        );
        if (currentItem.length > 0) {
          selectedItem = currentItem[0];
        }
      });
      this.setState({
        project: { ...selectedItem }
      });
    }
  };

  componentDidMount() {
    this.initComponentData();
  }

  componentDidUpdate(prevProps, prevState) {
    this.initComponentData(prevProps);
  }

  render() {
    const { showResources, activitydetail } = this.props;
    const { project } = this.state;

    return (
      <div className="aside-inner">
        <Card>
          <CardHeader>Details</CardHeader>
          <CardBody>
            {showResources && (
              <div>
                <span>
                  <b>More Resources</b>
                </span>
                <div
                  className="resources mt-2 d-flex"
                  style={{ flexWrap: "wrap", flexDirection: "column" }}
                >
                  {database.Resources.map(res => (
                    <span
                      onClick={() => this.props.addResource(res.name)}
                      className="mt-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={image2}
                        className="rounded-circle"
                        alt="Cinque Terre"
                        width="30"
                        height="30"
                      />{" "}
                      {res.name}
                    </span>
                  ))}
                  {/* <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image7}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Arindam
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image8}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Hiren
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image7}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Raj
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image2}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Kunal
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image8}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Ajay
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image2}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Vijay
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image2}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Rahul
                  </span>
                  <span className="mt-2" style={{ cursor: "pointer" }}>
                    <img
                      src={image2}
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="30"
                      height="30"
                    />{" "}
                    Nita
                  </span> */}
                </div>
              </div>
            )}
            {activitydetail &&
              (project && (
                <div>
                  <span>
                    <b>
                      {project.status === "Unassigned"
                        ? "Unassigned Activity Details"
                        : "Activity Details"}
                    </b>
                  </span>
                  <Table bordered striped className="mt-2">
                    <tbody>
                      <tr>
                        {project.status === "Unassigned" ? (
                          ""
                        ) : (
                          <>
                            <td>Assigned</td>
                            <td>
                              <img
                                src={image2}
                                className="rounded-circle"
                                alt="Cinque Terre"
                                width="30"
                                height="30"
                              />
                              <span className="ml-2">NG</span>
                            </td>
                          </>
                        )}
                      </tr>
                      <tr>
                        <td>Project Name</td>
                        <td>{project.name}</td>
                      </tr>
                      <tr>
                        <td>Planned Hours</td>
                        <td>{project.planned}</td>
                      </tr>
                      <tr>
                        <td>Actual Hours</td>
                        <td>{project.actual}</td>
                      </tr>
                      <tr>
                        <td>%Complete</td>
                        <td>{project.complete} %</td>
                      </tr>
                      <tr>
                        <td>Project Description</td>
                        <td>{project.description}</td>
                      </tr>
                      {/* <tr>
                        <td>Status</td>
                        <td>{project.status}</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </div>
              ))}
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default BacklogDetails;
