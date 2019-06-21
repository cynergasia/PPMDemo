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

class IssueChanges extends Component {
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
    const { issues } = this.props;
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

              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "3" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("3")}
                >
                  RFIs
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
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        {" "}
                        {"Overdue High Priority Issues (<30 days)"}:{" "}
                      </ListGroupItemHeading>
                      {issues.map(
                        (item, index) =>
                          item.status === "Overdue" &&
                          item.days < 30 && (
                            <>
                              <Link
                                key={index}
                                to={routesURL.ISSUE_WIKI + item.i_id}
                              >
                                {" "}
                                {item.name} ({item.owner})
                              </Link>
                              <br />
                            </>
                          )
                      )}
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"Overdue High Prioirity Issues(>30 & < 60)"}:{" "}
                      </ListGroupItemHeading>
                      {issues.map(
                        (item, index) =>
                          item.status === "Overdue" &&
                          (item.days >= 30 && item.days < 60) && (
                            <>
                              <Link
                                key={index}
                                to={routesURL.ISSUE_WIKI + item.i_id}
                              >
                                {" "}
                                {item.name} ({item.owner})
                              </Link>
                              <br />
                            </>
                          )
                      )}
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"Overdue High Prioirity Issues(> 60)"}:{" "}
                      </ListGroupItemHeading>
                      {issues.map(
                        (item, index) =>
                          item.status === "Overdue" &&
                          item.days >= 60 && (
                            <>
                              <Link
                                key={index}
                                to={routesURL.ISSUE_WIKI + item.i_id}
                              >
                                {" "}
                                {item.name} ({item.owner})
                              </Link>
                              <br />
                            </>
                          )
                      )}

                      <br />
                      <Link to={routesURL.ISSUE_LIST}> All Issues ... </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="2">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        {" "}
                        {"Pending Approval Changes"}:{" "}
                      </ListGroupItemHeading>
                      <Link to={routesURL.PAGE_NOT_FOUND}> Change1</Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}> Change4</Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"Approved Changes Still open"}:{" "}
                      </ListGroupItemHeading>
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        Change 400(Neeraj)
                      </Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        Change 19(Arindam)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"Overdue Approved Changes(> 30)"}:{" "}
                      </ListGroupItemHeading>
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        Change 220(Suresh)
                      </Link>,<br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        Change 9100(Arindam){" "}
                      </Link>
                      <br />
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        All Changes ...{" "}
                      </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="3">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        {" "}
                        {"New RFI"}:{" "}
                      </ListGroupItemHeading>

                      <Link to={routesURL.PAGE_NOT_FOUND}> RFI1</Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}> RFI4</Link>
                      <br />

                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"In progress RFI"}:{" "}
                      </ListGroupItemHeading>

                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        RFI 400(Neeraj)
                      </Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        RFI 19(Arindam)
                      </Link>
                      <br />

                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        {"Overdue RFI(> 30)"}:{" "}
                      </ListGroupItemHeading>

                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        RFI 220(Suresh)
                      </Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        RFI 9100(Arindam)
                      </Link>
                      <br />

                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}> All RFI ... </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default IssueChanges;
