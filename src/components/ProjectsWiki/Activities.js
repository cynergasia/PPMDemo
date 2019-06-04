import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";

class Activities extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Activities
            <div className="card-header-actions">
              <i className="fa fa-file-excel-o mr-2" />
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Assigned To</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>% Complete</th>
                  <th>Planned Hrs</th>
                  <th>Actual Hrs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                </tr>
                <tr>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                  <td>NULL</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Activities;
