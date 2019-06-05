import React, { Component } from "react";
import { Card, CardHeader, CardBody, TabContent, TabPane } from "reactstrap";

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
              Issues
            </span>

            <span
              className={`${
                activeTab === "2" ? "text-primary" : ""
              } mr-3 cursor-pointer`}
              onClick={() => this.toggle("2")}
            >
              Changes
            </span>

            <span
              className={`${
                activeTab === "3" ? "text-primary" : ""
              } mr-3 cursor-pointer`}
              onClick={() => this.toggle("3")}
            >
              RFIs
            </span>
            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
                {
                  "Overdue High Priority Issues (<30 days): issue1 (Neeraj) issue 2(Suresh), Issue3 (Arindam), (…)"
                }{" "}
                <br />
                {
                  "Overdue High Prioirity Issues(>30 & < 60): Issue 4(Suresh), Issue 9(Arindam), (..)"
                }{" "}
                <br />
                {
                  "Overdue High Prioirity Issues(> 60): Issue 0(Suresh), Issue 900(Arindam), (..)"
                }{" "}
                <br />
                All Issues .. <br />
              </TabPane>
              <TabPane tabId="2">
                {"Pending Approval Changes: Change1, Change4, (…)"}
                <br />
                {
                  "Approved Changes Still open: Change 400(Neeraj), Change 19(Arindam), (..)"
                }
                <br />
                {
                  "Overdue Approved Changes(> 30): Change 220(Suresh), Change 9100(Arindam), (..)"
                }
                <br />
                All Changes ..
              </TabPane>
              <TabPane tabId="3">
                {"New RFI: RFI1, RFI4, (…)"}
                <br />
                {"In progress RFI: RFI 400(Neeraj), RFI 19(Arindam), (..)"}
                <br />
                {"Overdue RFI(> 30): RFI 220(Suresh), RFI 9100(Arindam), (..)"}
                <br />
                All RFI ..
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default IssueChanges;
