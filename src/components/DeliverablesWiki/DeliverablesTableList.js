import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
// import DeliverablesTableListItems from "./DeliverablesTableListItems";
import ReactDataTableNew from "../ReactDataTableNew";

let deliveriablesListData = {
  columns: [
    {
      label: "Deliverable Name",
      field: "deliverable_name",
      sort: "asc"
    },
    {
      label: "Workpackage",
      field: "workpackage",
      sort: "asc"
    },
    {
      label: "Type",
      field: "type",
      sort: "asc"
    },
    {
      label: "Owner",
      field: "owner",
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
      label: "Completion Date",
      field: "completion_date",
      sort: "asc"
    },
    {
      label: "Progress",
      field: "progress",
      sort: "asc"
    },
    {
      label: "Comments",
      field: "comments",
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

class DeliverablesTableList extends Component {
  state = {
    data: { ...deliveriablesListData }
  };
  handleClick = () => {
    console.log("Click");
  };
  componentDidMount() {
    deliveriablesListData.rows = this.props.deliverablesList;
    this.setState({ data: { ...deliveriablesListData } });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <div className="card-header-actions">
            <i className="fa fa-window-close-o mr-2" />
            <i className="fa fa-plus-circle mr-2" />
            <i className="fa fa-save" />
          </div>
        </CardHeader>
        <CardBody>
          {/* <Table responsive>
            <thead>
              <tr>
                <th>Deliverable Name</th>
                <th>Workpackage</th>
                <th>Type</th>
                <th>Owner</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Completion Date</th>
                <th>Progress</th>
                <th>Comments</th>
                <th>Public</th>
              </tr>
            </thead>
            <tbody>
              <DeliverablesTableListItems />
              <DeliverablesTableListItems />
              <DeliverablesTableListItems />
            </tbody>
          </Table> */}
          <ReactDataTableNew data={this.state.data} />
        </CardBody>
      </Card>
    );
  }
}

export default DeliverablesTableList;
