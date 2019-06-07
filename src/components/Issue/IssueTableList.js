import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

import ReactDataTableNew from "../ReactDataTableNew";

const data = {
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
  rows: [
    {
      issue_number: 1001,
      issue_name: "Fireproofing",
      type: "Design Flaw",
      assignee: "Arindam",
      comments: "",
      activities_due: "AD001 AD002",
      impact_type: "Schedule",
      per_complete: "",
      public: "N"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    },
    {
      issue_number: 1002,
      issue_name: "Earthquake reinforcement",
      type: "Material",
      assignee: "Suresh, Neeraj",
      comments: "",
      activities_due: "AD003 AD004",
      impact_type: "Budget",
      per_complete: "",
      public: "Y"
    }
  ]
};

class IssueTableList extends Component {
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
            <ReactDataTableNew data={data} />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default IssueTableList;
