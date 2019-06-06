import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTable from "../../../components/ReactDataTable";
import moment from "moment";

const data = [
  {
    due_date: new Date("4/22/2019"),
    project: "Project 4",
    notification: "Invoice Approval Pending"
  },
  {
    due_date: new Date("4/22/2019"),
    project: "Project 3",
    notification: "Status Report Pending"
  },
  {
    due_date: new Date("4/22/2019"),
    project: "Project 10",
    notification: "Invoice Approval Pending"
  },
  {
    due_date: new Date("4/22/2019"),
    project: "Project 1",
    notification: "Issue Review Pending"
  },
  {
    due_date: new Date("4/22/2019"),
    project: "Project 6",
    notification: "Status Report Pending"
  },
  {
    due_date: new Date("10/10/2019"),
    project: "Project 2",
    notification: "Issue Review Pending"
  },
  {
    due_date: new Date("3/02/2019"),
    project: "Project 1",
    notification: "Status Report Pending"
  },
  {
    due_date: new Date("2/22/2019"),
    project: "Project 3",
    notification: "Invoice Approval Pending"
  },
  {
    due_date: new Date("01/10/2019"),
    project: "Project 5",
    notification: "Issue Review Pending"
  },
  {
    due_date: new Date("2/18/2019"),
    project: "Project 6",
    notification: "Status Report Pending"
  }
];
const columns = [
  {
    Header: "Due Date V",
    accessor: "due_date",
    sortable: true,
    filterable: false,
    Cell: row => moment(row.value).format("MM/DD/YYYY")
  },
  {
    Header: "Project",
    accessor: "project",

    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  },
  {
    Header: "Notification",
    accessor: "notification",
    filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
  }
];
class Notification extends Component {
  handleClick = id => {
    window.location.hash = "/500";
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Notification
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <ReactDataTable
              data={data}
              columns={columns}
              handleClick={this.handleClick}
              pageSize={5}
              minRows={7}
              paginationDown={false}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Notification;
