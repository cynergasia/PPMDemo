import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";

let meetingListData = {
  columns: [
    {
      label: "Meeting Number",
      field: "number",
      sort: "asc"
    },
    {
      label: "Template",
      field: "template",
      sort: "asc"
    },
    {
      label: "Recurring",
      field: "recurring",
      sort: "asc"
    },
    {
      label: "Frequency",
      field: "frequency",
      sort: "asc"
    },
    {
      label: "Ends on",
      field: "endson",
      sort: "asc"
    },
    {
      label: "Date",
      field: "date",
      sort: "asc"
    },
    {
      label: "Location",
      field: "location",
      sort: "asc"
    },
    {
      label: "Start time",
      field: "starttime",
      sort: "asc"
    },
    {
      label: "Duration",
      field: "duration",
      sort: "asc"
    },
    {
      label: "Subject",
      field: "subject",
      sort: "asc"
    },
    {
      label: "Attendee",
      field: "attendee",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "Description",
      field: "description",
      sort: "asc"
    }
  ],
  rows: []
};
class MeetingTableList extends Component {
  state = {
    data: { ...meetingListData }
  };
  componentDidMount() {
    meetingListData.rows = this.props.meetingList;
    this.setState({ data: { ...meetingListData } });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <ReactDataTableNew
              data={this.state.data}
              entries={10}
              entriesOptions={[10, 20, 50, 100]}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default MeetingTableList;
