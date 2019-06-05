import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane,
  span
} from "reactstrap";

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
          <CardHeader>
            <span
              className={`${
                activeTab === "1" ? "text-primary" : ""
              } mr-3 cursor-pointer`}
              onClick={() => this.toggle("1")}
            >
              WBS
            </span>

            <span
              className={`${
                activeTab === "2" ? "text-primary" : ""
              } mr-3 cursor-pointer`}
              onClick={() => this.toggle("2")}
            >
              WorkPackages
            </span>

            <span
              className={`${
                activeTab === "3" ? "text-primary" : ""
              } mr-3 cursor-pointer`}
              onClick={() => this.toggle("3")}
            >
              Deliverables
            </span>

            <span
              className={`${
                activeTab === "4" ? "text-primary" : ""
              } cursor-pointer`}
              onClick={() => this.toggle("4")}
            >
              Progress
            </span>

            <div className="card-header-actions">
              <i className="fa fa-save mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                Top Tasks <br />
                Requirements-1.0 (Complete) <br />
                Design - 2.0 (Open, 06/30/19) <br />
                All Tasks <br />
              </TabPane>
              <TabPane tabId="2">
                Overdue Workpackages : Design.Part.01(01-May-2019),
                Delivery.Part.02(15-May-2019) ,(..) <br />
                Upcoming Workpackages : Requirements-1.0 (20-Jun-2019),
                Delivery.Part.02(30-Jun-2019) ,(..) <br />
                Workpackage Not started: Design - 2.0 , Quality Assurance ,(..)
                <br />
                All Workpackages ..
              </TabPane>
              <TabPane tabId="3">
                Overdue Deliverables : Design.01..01(01-May-2019),
                Delivery.Code.02(15-May-2019) ,(..)<br />
                Upcoming Deliverables : Requirements.01.01 (20-Jun-2019),
                Delivery.Code.021(30-Jun-2019) ,(..)<br />
                Deliverables Not started: Design .012 , Quality Assurance
                Document.01 ,(..)<br />
                All Deliverables ..
              </TabPane>
              <TabPane tabId="4">
                Workpackage Progress : Work Package 01, Work Package 02, ,(..)<br />
                All Progress ..
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackages;
