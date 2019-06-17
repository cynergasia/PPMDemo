import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let workPackageActivitiesData = {
  columns: [
    {
      label: "Description",
      field: "description",
      sort: "asc"
    },
    {
      label: "Assigned To",
      field: "assigned_to",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "per_complete",
      sort: "asc"
    }
  ],
  rows: []
};

class WorkPackageActivities extends Component {
  state = {
    data: { ...workPackageActivitiesData }
  };
  componentDidMount() {
    workPackageActivitiesData.rows = this.props.activities;
    this.setState({ data: { ...workPackageActivitiesData } });
  }
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
            <ReactDataTableNew data={this.state.data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default WorkPackageActivities;
