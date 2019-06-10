import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../../../components/ReactDataTableNew";

let data = {
  columns: [
    {
      label: "Due Date",
      field: "due_date",
      sort: "asc"
    },
    {
      label: "Project",
      field: "project",
      sort: "asc"
    },
    {
      label: "Notification",
      field: "notification",
      sort: "asc"
    }
  ],
  rows: [
    {
      due_date: "4/22/2019",
      project: "project4",
      notification: "Invoice Approval Pending"
    },
    {
      due_date: "4/22/2019",
      project: "project3",
      notification: "Status Report Pending"
    },
    {
      due_date: "4/22/2019",
      project: "project10",
      notification: "Invoice Approval Pending"
    },
    {
      due_date: "4/22/2019",
      project: "project1",
      notification: "Issue Review Pending"
    },
    {
      due_date: "4/22/2019",
      project: "project6",
      notification: "Status Report Pending"
    },
    {
      due_date: "10/10/2019",
      project: "project2",
      notification: "Issue Review Pending"
    },
    {
      due_date: "3/02/2019",
      project: "project1",
      notification: "Status Report Pending"
    },
    {
      due_date: "2/22/2019",
      project: "project3",
      notification: "Invoice Approval Pending"
    },
    {
      due_date: "01/10/2019",
      project: "project5",
      notification: "Issue Review Pending"
    },
    {
      due_date: "2/18/2019",
      project: "project6",
      notification: "Status Report Pending"
    }
  ]
};

class Notification extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: ["dashboard"].includes(window.location.hash.split("/")["1"])
        ? { ...data }
        : {
            rows: data["rows"].filter(data => data.project === this.props.id),
            columns: data["columns"]
          }
    });
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Notification
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <ReactDataTableNew data={data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Notification;
