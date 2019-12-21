import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import ReactDataTableNew from "./../../../components/ReactDataTableNew";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { CSVLink } from "react-csv";
import ExportExcel from "./../../../helper/ExportExcel";
import database from "../../../database/database.json";
import { routesURL } from "../../../constant/routesURL";
import { Scrollbars } from "react-custom-scrollbars";

let data = {
  columns: [
    {
      label: "Project Number",
      field: "id",
      sort: "asc"
    },
    {
      label: "Project",
      field: "project",
      sort: "asc"
    },
    {
      label: "Customer",
      field: "customer",
      sort: "asc"
    },
    {
      label: "Stage",
      field: "stage",
      sort: "asc"
    },
    {
      label: "Execution Type",
      field: "execution",
      sort: "asc"
    },
    {
      label: "Current PI/Sprint",
      field: "sprint",
      sort: "asc"
    },
    {
      label: "Financial Complete",
      field: "financial",
      sort: "asc"
    },
    {
      label: "Execution Complete",
      field: "execution",
      sort: "asc"
    },
    {
      label: "Contract Value",
      field: "contractvalue",
      sort: "asc"
    },
    {
      label: "In Progress Activities",
      field: "progressactivities",
      sort: "asc"
    },
    {
      label: "Overdue Activities",
      field: "overdueactivities",
      sort: "asc"
    },
    {
      label: "Open Issues",
      field: "issues",
      sort: "asc"
    },
    {
      label: "Last week Cost",
      field: "lwcost",
      sort: "asc"
    },
    {
      label: "Cost",
      field: "cost",
      sort: "asc"
    },
    {
      label: "Revenue",
      field: "revenue",
      sort: "asc"
    },
    {
      label: "Margin",
      field: "margin",
      sort: "asc"
    }
  ],
  rows: []
};

class ProjectList extends Component {
  state = {
    data: { ...data }
  };

  handleExcel = () => {
    return;
  };

  componentDidMount() {
    this.updateData();
  }

  handleClick = id => {
    window.location.hash = `${routesURL.PROJECT_WIKI + id}`;
  };

  updateData() {
    data.rows = [];
    const { portfolio } = database;
    if (portfolio.length < 1) return;

    const projects = [];
    portfolio.forEach(({ projects: p, name }) => {
      name === this.props.portfolio &&
        p.forEach(
          ({
            id,
            customer,
            execution_type,
            name,
            sprint,
            end_date,
            stage,
            financial_per_complete,
            execution_per_complete,
            contract_value,
            in_progress_activities,
            overdue_activities,
            open_issues,
            last_week_cost,
            cost,
            revenue,
            margin
          }) => {
            projects.push({
              id,
              name,
              customer,
              stage,
              execution_type,
              sprint,
              financial_per_complete,
              execution_per_complete,
              contract_value,
              in_progress_activities,
              overdue_activities,
              open_issues,
              last_week_cost,
              cost,
              revenue,
              margin,
              clickEvent: () => this.handleClick(id)
            });
          }
        );
    });

    this.setState({
      data: {
        ...this.state.data,
        rows: [...this.state.data.rows, ...projects]
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Project List
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
          </CardHeader>
          <CardBody className="d-flex tableScroll">
            <Scrollbars autoHide>
              <ReactDataTableNew
                striped
                bordered
                responsive
                data={this.state.data}
                entries={5}
                entriesOptions={[5, 10, 20, 50, 100]}
                isButton={true}
              />
            </Scrollbars>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProjectList;
