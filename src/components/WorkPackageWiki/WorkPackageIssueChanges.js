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
  ListGroupItemText,
  ListGroupItemHeading
} from "reactstrap";
import { routesURL } from "../../constant/routesURL";
import { Link } from "react-router-dom";

class WorkPackageIssueChanges extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

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
                  Issues
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
                  Changes
                </a>
              </li>
            </ul>

            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                There are 4 change orders approved till system date. Last change
                order of $40000 was approved on 21st Mar,2019.
              </TabPane>
              <TabPane tabId="2" />
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageIssueChanges;
