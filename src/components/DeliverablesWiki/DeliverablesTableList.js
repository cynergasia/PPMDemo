import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import DeliverablesTableListItems from "./DeliverablesTableListItems";

class DeliverablesTableList extends Component {
  render() {
    return (
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
                <th>Deliverable Name</th>
                <th>Workpackage</th>
                <th>Type</th>
                <th>Owner</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Completion Date</th>
                <th>Progress</th>
                <th>Comments</th>
                <th>Public</th>
              </tr>
            </thead>
            <tbody>
              <DeliverablesTableListItems />
              <DeliverablesTableListItems />
              <DeliverablesTableListItems />
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default DeliverablesTableList;
