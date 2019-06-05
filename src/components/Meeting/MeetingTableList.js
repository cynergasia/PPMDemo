import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import MeetingTableListItems from "./MeetingTableListItems";

class MeetingTableList extends Component {
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
                  <th>Date</th>
                  <th>Meeting Title</th>
                  <th>Attendees</th>
                  <th>Document</th>
                  <th>Pubic</th>
                </tr>
              </thead>
              <tbody>
                <MeetingTableListItems />
                <MeetingTableListItems />
                <MeetingTableListItems />
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default MeetingTableList;
