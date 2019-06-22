import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

import ReactDataTableNew from "../ReactDataTableNew";

const changesListData = {
  columns: [
    {
      label: "Change Number",
      field: "change_number",
      sort: "asc"
    },
    {
      label: "Change Name",
      field: "change_name",
      sort: "asc"
    },
    {
      label: "Type",
      field: "type",
      sort: "asc"
    },
    {
      label: "Assignee",
      field: "assignee",
      sort: "asc"
    },
    {
      label: "Comments",
      field: "comments",
      sort: "asc"
    },
    {
      label: "Activities Due",
      field: "activities_due",
      sort: "asc"
    },
    {
      label: "Impact Type",
      field: "impact_type",
      sort: "asc"
    },
    {
      label: "% Complete",
      field: "per_complete",
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

class ChangeTableList extends Component {
  state = {
    data: { ...changesListData }
  };
  componentDidMount() {
    changesListData.rows = this.props.changesList;
    this.setState({ data: { ...changesListData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
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

export default ChangeTableList;
