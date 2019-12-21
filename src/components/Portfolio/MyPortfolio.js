import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { CSVLink } from "react-csv";
import ReactDataTableNew from "../ReactDataTableNew";
import ExportExcel from "../../helper/ExportExcel";

class MyPortfolio extends Component {
  columns = [
    { label: "Name", field: "name", sort: "asc" },
    { label: "Description", field: "description", sort: "asc" },
    { label: "Dynamic?", field: "dynamic", sort: "asc" },
    { label: "Public?", field: "public", sort: "asc" },
    { label: "Default", field: "default", sort: "asc" }
  ];

  handleExcel = () => {
    return;
  };

  render() {
    const { rows } = this.props;
    const columns = this.columns;

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            My Portfolios
            <div className="card-header-actions">
              <UncontrolledDropdown tag="i" className="mr-2 cursor-pointer">
                <DropdownToggle tag="i">
                  <i className="fa fa-download card-header-icons text-primary" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Download as </DropdownItem>
                  <DropdownItem onClick={() => <ExportExcel />}>
                    <i className="fa fa-file-excel-o mr-2" />{" "}
                    <ExportExcel
                      data={{ columns, rows }}
                      filename="activities.xlsx"
                    />
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file-pdf-o mr-2" /> PDF
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file mr-2" />{" "}
                    <CSVLink
                      filename="activities.csv"
                      separator=" "
                      data={this.props.rows}
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
            <ReactDataTableNew
              striped
              bordered
              responsive
              data={{ columns, rows }}
              entries={5}
              entriesOptions={[5, 10, 20, 50, 100]}
              isButton={true}
            />
          </CardBody>
        </Card>
        <div></div>
      </React.Fragment>
    );
  }
}

export default MyPortfolio;
