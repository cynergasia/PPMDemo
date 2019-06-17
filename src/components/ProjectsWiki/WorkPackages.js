import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  span,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
class WorkPackages extends Component {
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
                  WBS
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
                  WorkPackages
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
                  Deliverables
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-toggle="tab"
                  className={`${
                    activeTab === "4" ? "active nav-link" : "nav-link"
                  }`}
                  onClick={() => this.toggle("4")}
                >
                  Progress
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
                    <ListGroupItemHeading>Top Tasks:</ListGroupItemHeading>
                    <ListGroupItemText>
                      <Link to={routesURL.TASK_WIKI}>
                        Requirements-1.0 (Complete)
                      </Link>
                      <br />
                      <Link to={routesURL.TASK_WIKI}>
                        Design - 2.0 (Open, 06/30/19){" "}
                      </Link>
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}> All Tasks ... </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="2">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        Overdue Workpackages :
                      </ListGroupItemHeading>

                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Design.Part.01(01-May-2019)
                      </Link>
                      <br />
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Delivery.Part.02(15-May-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Upcoming Workpackages :
                      </ListGroupItemHeading>

                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Requirements-1.0 (20-Jun-2019)
                      </Link>
                      <br />
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Delivery.Part.02(30-Jun-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Workpackage Not started:{" "}
                      </ListGroupItemHeading>

                      <Link to={routesURL.WORKPACKAGE_WIKI}> Design - 2.0</Link>
                      <br />
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Quality Assurance{" "}
                      </Link>
                      <br />
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        All Workpackages ...{" "}
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
                        Overdue Deliverables :
                      </ListGroupItemHeading>

                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Design.Code.01(01-May-2019)
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Delivery.Code.02(15-May-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Upcoming Deliverables :
                      </ListGroupItemHeading>

                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Requirements-1.0 (20-Jun-2019)
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Delivery.Code.02(30-Jun-2019)
                      </Link>
                      <br />
                      <br />
                      <ListGroupItemHeading>
                        {" "}
                        Deliverables Not started:{" "}
                      </ListGroupItemHeading>

                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Design - 2.0
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Quality Assurance{" "}
                      </Link>
                      <br />
                      <Link to={routesURL.DELIVERABLES_WIKI}>
                        {" "}
                        Document.01{" "}
                      </Link>
                      <br />
                      <br />
                      <Link to={routesURL.DELIVERABLES_LIST}>
                        {" "}
                        All Deliverables ...{" "}
                      </Link>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>

              <TabPane tabId="4">
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemText>
                      <ListGroupItemHeading>
                        {" "}
                        Workpackage Progress :{" "}
                      </ListGroupItemHeading>
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Work Package 01
                      </Link>{" "}
                      <br />
                      <Link to={routesURL.WORKPACKAGE_WIKI}>
                        {" "}
                        Work Package 02
                      </Link>{" "}
                      <br />
                      <br />
                      <Link to={routesURL.PAGE_NOT_FOUND}>
                        {" "}
                        All Progress ...{" "}
                      </Link>
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

export default WorkPackages;
