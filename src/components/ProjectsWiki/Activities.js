import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "../ReactDataTableNew";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import ExportExcel from "../../helper/ExportExcel";
import { CSVLink } from "react-csv";
import database from "../../database/database";

// let data = {
//   columns: [
//     {
//       label: "Description",
//       field: "description",
//       sort: "asc"
//     },
//     {
//       label: "Assigned To",
//       field: "assigned_to",
//       sort: "asc"
//     },
//     {
//       label: "Start Date",
//       field: "start_date",
//       sort: "asc"
//     },
//     {
//       label: "Due Date",
//       field: "due_date",
//       sort: "asc"
//     },
//     {
//       label: "Status",
//       field: "status",
//       sort: "asc"
//     },
//     {
//       label: "% Complete",
//       field: "perc_complete",
//       sort: "asc"
//     },
//     {
//       label: "Planned Hrs",
//       field: "planned_hrs",
//       sort: "asc"
//     },
//     {
//       label: "Actual Hrs",
//       field: "actual_hrs",
//       sort: "asc"
//     }
//   ],
//   rows: [
//     {
//       description: "asd",
//       assigned_to: "abc",
//       start_date: "02-05-2019",
//       due_date: "31-02-2019",
//       status: "Pending",
//       perc_complete: "80",
//       planned_hrs: "50",
//       actual_hrs: "60"
//     },
//     {
//       description: "bbb",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-07-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     },
//     {
//       description: "ccc",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-07-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     },
//     {
//       description: "ddd",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-03-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     },
//     {
//       description: "eee",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-07-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     },
//     {
//       description: "fff",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-05-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     },
//     {
//       description: "ggg",
//       assigned_to: "abc",
//       start_date: "02-08-2016",
//       due_date: "31-08-206",
//       status: "Complete",
//       perc_complete: "100",
//       planned_hrs: "200",
//       actual_hrs: "250"
//     }
//   ]
// };

let data = {
  columns: [
    {
      label: "Activity Number",
      field: "activityNumber",
      sort: "asc"
    },
    {
      label: "Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Work Package",
      field: "work_package",
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
      label: "Planned",
      field: "planned",
      sort: "asc"
    },
    {
      label: "Actual",
      field: "actual",
      sort: "asc"
    },
    {
      label: "Remaning",
      field: "remaning",
      sort: "asc"
    },
    {
      label: "Status",
      field: "status",
      sort: "asc"
    },

    {
      label: "% Complete",
      field: "per_complete",
      sort: "asc"
    },
    {
      label: "Comments",
      field: "comments",
      sort: "asc"
    }
  ],
  rows: []
};

class Activities extends Component {
  state = {
    dropdownOpen: false,
    data: {}
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  handleExcel = () => {
    return;
  };

  componentDidMount() {
    data.rows = database.activity;
    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Activities
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

              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ReactDataTableNew
              striped
              bordered
              responsive
              data={this.state.data}
              entries={5}
              entriesOptions={[5, 10, 20, 50, 100]}
              isButton={true}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Activities;
