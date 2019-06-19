import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

import ReactDataTableNew from "../ReactDataTableNew";

const issueListData = {
  columns: [
    {
      label: "Issue Number",
      field: "issue_number",
      sort: "asc"
    },
    {
      label: "Issue Name",
      field: "issue_name",
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

class IssueTableList extends Component {
  state = {
    data: { ...issueListData }
  };
  componentDidMount() {
    issueListData.rows = this.props.issueList;
    this.setState({ data: { ...issueListData } });
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

export default IssueTableList;
