import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import ReactDataTable from "../ReactDataTable";

let columns = [
  {
    Header: "Description",
    accessor: "description",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Assigned To",
    accessor: "assigned_to",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Start Date",
    accessor: "start_date",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Due Date",
    accessor: "due_date",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Status",
    accessor: "status",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "% Complete",
    accessor: "perc_complete",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Planned Hrs",
    accessor: "planned_hrs",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Actual Hrs",
    accessor: "actual_hrs",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  }
];
let data = [
  {
    description: "asd",
    assigned_to: "abc",
    start_date: "02-05-2019",
    due_date: "31-02-2019",
    status: "Pending",
    perc_complete: "80",
    planned_hrs: "50",
    actual_hrs: "60",
    id: "654"
  },
  {
    description: "bbb",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-07-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "65"
  },
  {
    description: "ccc",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-07-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "654987"
  },
  {
    description: "ddd",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-03-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "653333587"
  },
  {
    description: "eee",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-07-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "654777"
  },
  {
    description: "fff",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-05-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "6549999"
  },
  {
    description: "ggg",
    assigned_to: "abc",
    start_date: "02-08-2016",
    due_date: "31-08-206",
    status: "Complete",
    perc_complete: "100",
    planned_hrs: "200",
    actual_hrs: "250",
    id: "6566664"
  }
];

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
            <ReactDataTable data={data} columns={columns} loading={false} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Activities;
