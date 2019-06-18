import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let workPackageActivitiesData = {
  columns: [
    {
      label: "Number",
      field: "wbsNumber",
      sort: "asc"
    },
    {
      label: "Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Duration",
      field: "duration",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "End Date",
      field: "end_date",
      sort: "asc"
    },
    {
      label: "Resources",
      field: "resources",
      sort: "asc"
    },
    {
      label: "Estimate Hours",
      field: "estimatehours",
      sort: "asc"
    },
    {
      label: "Actual Hours",
      field: "actualhours",
      sort: "asc"
    },
    {
      label: "Remaining Hours",
      field: "remaininghours",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "complete",
      sort: "asc"
    },
    {
      label: "Public",
      field: "public",
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
