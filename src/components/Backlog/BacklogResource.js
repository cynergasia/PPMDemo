import React, { Component } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { CSVLink } from "react-csv";
import ReactDataTableNew from '../ReactDataTableNew';
import ExportExcel from '../../helper/ExportExcel';

let data = {
  columns: [
    {
      label: "Resource",
      field: "resource",
      sort: "asc"
    },
    {
      label: "Project",
      field: "project",
      sort: "asc"
    },
    {
      label: "Top Task",
      field: "task",
      sort: "asc"
    },
    {
      label: "Execution Element",
      field: "exec_element",
      sort: "asc"
    },
    {
      label: "Activity",
      field: "activity",
      sort: "asc"
    },
    {
      label: "Start",
      field: "start",
      sort: "asc"
    },
    {
      label: "Due",
      field: "due",
      sort: "asc"
    },
    {
      label: "Plan Hrs",
      field: "plan_hr",
      sort: "asc"
    },
    {
      label: "Actual Hrs",
      field: "actual_hr",
      sort: "asc"
    },
    {
      label: "ETC",
      field: "etc",
      sort: "asc"
    },
    {
      label: "% Comp",
      field: "completed",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },
    {
      label: "Progress Comment",
      field: "progress_comment",
      sort: "asc"
    }
  ],
  rows: []
};

class ActivityResource extends Component {
  state = {
    data: {}
  };
  handleExcel = () => {
    return;
  };

  componentDidMount() {
    data.rows = this.props.resource;
    this.setState({ data });
  }
  render() {

    return (
      <React.Fragment>
        <div className="card-header-actions">
          <UncontrolledDropdown tag="i" className="mr-2 cursor-pointer">
            <DropdownToggle tag="i">
              <i className="fa fa-download card-header-icons text-primary" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Download as </DropdownItem>
              <DropdownItem onClick={() => <ExportExcel />}>
                <i className="fa fa-file-excel-o mr-2" />{" "}
                <ExportExcel data={data} filename="activities.xlsx" />
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file-pdf-o mr-2" /> PDF
                  </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file mr-2" />{" "}
                <CSVLink
                  filename="activities.csv"
                  separator=" "
                  data={data.rows}
                  className="text-dark text-decoration-none"
                >
                  CSV
                    </CSVLink>
              </DropdownItem>
              <DropdownItem onClick={() => window.print()}>
                <i className="fa fa-print mr-2" /> Print
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <i className="fa fa-pencil-square" />
        </div>
        <ReactDataTableNew
          striped
          bordered
          responsive
          data={this.state.data}
          entries={5}
          entriesOptions={[5, 10, 20, 50, 100]}
          isButton={true}
        />
      </React.Fragment>
    );
  }
}

export default ActivityResource;
