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
      label: "Title",
      field: "title",
      sort: "asc"
    }
  ],

  rows: [
    {
      due_date: "16-Jun-19",
      project: "Shangri-la - SLUB Pha(60453005)",
      title: "Change Order C60453005-3 Approval"
    },
    {
      due_date: "12-Jun-19",
      project: "Tai Kok Tsui, Kowloon(60453007)",
      title: "Invoice Approval - INV1018"
    },
    {
      due_date: "12-Jun-19",
      project: "HKHA  for Supervising(60453009)",
      title: "Invoice Approval - INV1009"
    },
    {
      due_date: "09-Jun-19",
      project: "Tsing Yi Indoor Recre(60453010)",
      title: "Deliverable D10256 Due"
    },
    {
      due_date: "09-Jun-19",
      project: "810B West KLN Terminu(60453012)",
      title: "Project EAC change Approval"
    },
    {
      due_date: "07-Jun-19",
      project: "TWGH Wong Fat Nam Col(60453013)",
      title: "Change Order C60453013-2 Approved"
    }
    
  ]
};

class title extends Component {
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

export default title;
