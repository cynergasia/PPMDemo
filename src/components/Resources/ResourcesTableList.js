import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ResourcesTableListItems from "./ResourcesTableListItems";

class ResourcesTableList extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Neeraj Alloaction
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
                </tr>
              </thead>
              <tbody>
                <ResourcesTableListItems />
                <ResourcesTableListItems />
                <ResourcesTableListItems />
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ResourcesTableList;
