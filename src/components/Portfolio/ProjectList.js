import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { CSVLink } from "react-csv";
import ReactDataTableNew from "./../ReactDataTableNew";
import ExportExcel from "./../../helper/ExportExcel";
import { Link } from "react-router-dom";
import database from "../../database/database.json";

let data = {
  columns: [
    {
      label: "Project Name",
      field: "project",
      sort: "asc"
    },
    {
      label: "Project Number",
      field: "project_number",
      sort: "asc"
    },
    {
      label: "Project Stage",
      field: "project_stage",
      sort: "asc"
    },
    {
      label: "PM",
      field: "pm",
      sort: "asc"
    },
    {
      label: "Start Date",
      field: "start_date",
      sort: "asc"
    },
    {
      label: "End Date",
      field: "end_date",
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
  updateData() {
    data.rows = [];
    const { portfolio } = database;
    if (portfolio.length < 1) return;

    const projects = [];
    portfolio.forEach(({ projects: p, name }) => {
      name === this.props.portfolio &&
        p.forEach(({ id, customer, name, pm, stage, start_date, end_date }) => {
          projects.push({
            name,
            id,
            stage,
            pm,
            start_date,
            end_date
          });
        });
    });

    this.setState({
      data: {
        ...this.state.data,
        rows: [...this.state.data.rows, ...projects]
      }
    });
  }
  // updateData() {
  //   console.log(this.props);
  //   data.rows = [];
  //   const projectdata = database.projectlists;
  //   if (projectdata.length > 0) {
  //     projectdata.forEach(({ project_name, id, project_stage, project_manager, start_date, end_date }) => {
  //       data.rows.push({
  //         project_name,
  //         id,
  //         project_stage,
  //         project_manager,
  //         start_date,
  //         end_date
  //       });
  //     });
  //   }
  //   this.setState({ data });
  // }
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
            </div>
          </CardHeader>
          <CardBody>
            <Link to="/500" className="mr-2">
              <i className="fa fa-trash" /> Remove
            </Link>
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

export default ProjectList;
