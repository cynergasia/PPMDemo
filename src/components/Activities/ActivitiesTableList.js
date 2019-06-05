import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ActivitiesTableListItems from "./ActivitiesTableListItems";

class ActivitiesTableList extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-save" />
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Workpackage</th>
                  <th>Activity Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>% Progress</th>
                  <th>Assignee</th>
                  <th>PlanEffort</th>
                  <th>ActualEffort</th>
                </tr>
              </thead>
              <tbody>
                <ActivitiesTableListItems />
                <ActivitiesTableListItems />
                <ActivitiesTableListItems />
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ActivitiesTableList;
