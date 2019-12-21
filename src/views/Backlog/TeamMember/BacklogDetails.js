import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import image2 from "../../../assets/img/avatars/2.jpg";
import database from "../../../database/backlog_database.json";

class BacklogDetails extends Component {
  state = {
    project: {}
  };

  member = () => localStorage.getItem("member");

  initComponentData = prevProps => {
    console.info(
      "[BacklogDetails.js] this.props.currentActivity ======>",
      this.props.currentActivity
    );
    if (
      !prevProps ||
      prevProps.currentActivity !== this.props.currentActivity
    ) {
      let selectedItem;
      database.Resources.map(({ Activity, name }) => {
        const currentItem = Activity.filter(
          item => item.id === this.props.currentActivity
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
    const { activitydetail } = this.props;
    const { project } = this.state;
    console.info("[BacklogDetails.js] project ======>", project);

    return (
      <div className="aside-inner">
        <Card>
          <CardHeader>Details</CardHeader>
          <CardBody>
            {activitydetail &&
              (project && (
                <div>
                  <span>
                    <b>Activity Details</b>
                  </span>
                  <Table bordered striped className="mt-2">
                    <tbody>
                      <tr>
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
