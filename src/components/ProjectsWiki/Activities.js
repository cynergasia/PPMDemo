import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let data = {
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
      field: "perc_complete",
      sort: "asc"
    },
    {
      label: "Planned Hrs",
      field: "planned_hrs",
      sort: "asc"
    },
    {
      label: "Actual Hrs",
      field: "actual_hrs",
      sort: "asc"
    }
  ],
  rows: [
    {
      description: "asd",
      assigned_to: "abc",
      start_date: "02-05-2019",
      due_date: "31-02-2019",
      status: "Pending",
      perc_complete: "80",
      planned_hrs: "50",
      actual_hrs: "60"
    },
    {
      description: "bbb",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-07-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    },
    {
      description: "ccc",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-07-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    },
    {
      description: "ddd",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-03-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    },
    {
      description: "eee",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-07-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    },
    {
      description: "fff",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-05-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    },
    {
      description: "ggg",
      assigned_to: "abc",
      start_date: "02-08-2016",
      due_date: "31-08-206",
      status: "Complete",
      perc_complete: "100",
      planned_hrs: "200",
      actual_hrs: "250"
    }
  ]
};

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
            <ReactDataTableNew
              striped
              bordered
              responsive
              data={data}
              entries={5}
              entriesOptions={[5, 10, 20, 50, 100]}
              isButton={true}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Activities;
