/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
import ReactDataTableNew from "../ReactDataTableNew";
import database from "../../database";

let commentData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "By",
      field: "by",
      sort: "asc"
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc"
    }
  ],
  rows: []
};

let activityData = {
  columns: [
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "By",
      field: "by",
      sort: "asc"
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc"
    }
  ],
  rows: []
};

export class ActivityLog extends Component {
  state = {
    activeTab: "1",
    commentsData: { ...commentData },
    activityLogData: { ...activityData }
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentDidMount() {
    commentData.rows = database.comments;
    activityData.rows = database.activityLog;
    this.setState({
      commentsData: { ...commentData },
      activityLogData: { ...activityData }
    });
  }
  render() {
    const { activeTab } = this.state;
    return (
      <React.Fragment>
        <Card>
          <CardHeader className="cardtabsboxs">
            <ul class="nav nav-tabs">
              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "1" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("1")}
                >
                  {" "}
                  Comments
                </a>
              </li>

              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "2" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("2")}
                >
                  Activity Log
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                <ReactDataTableNew
                  data={this.state.commentsData}
                  paging={false}
                  searching={false}
                />
              </TabPane>

              <TabPane tabId="2">
                <ReactDataTableNew
                  data={this.state.activityLogData}
                  paging={false}
                  searching={false}
                />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ActivityLog;
