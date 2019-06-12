import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../../../components/ReactDataTableNew";
import database from "../../../database";

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
  rows: []
};

class title extends Component {
  state = {
    data: [],
    update: false
  };

  componentDidMount() {
    this.setState({ data });
    this.updateData();
    this.setState({ update: true });
  }

  updateData() {
    if (!["dashboard"].includes(window.location.hash.split("/")["1"])) {
      const projectdata = database.projects.filter(
        ({ id }) => `${id}` === this.props.id
      );
      if (projectdata.length > 0) {
        projectdata.forEach(({ name: project, notification }) => {
          notification.forEach(({ due_date, title }) => {
            data.rows.push({ due_date, title, project });
          });
        });
      }
    } else {
      database.projects.forEach(project => {
        project.notification.forEach(item => {
          data.rows.push({
            due_date: item.due_date,
            title: item.title,
            project: project.name
          });
        });
      });
    }
  }

  render() {
    return (
      <div className="card">
        <CardHeader>
          Notification
          <div className="card-header-actions" />
        </CardHeader>
        <CardBody>
          <ReactDataTableNew
            data={this.state.data}
            update={this.state.update}
          />
        </CardBody>
      </div>
    );
  }
}

export default title;
