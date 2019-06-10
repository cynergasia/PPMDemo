import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { CSVLink } from "react-csv";
import ExportExcel from "../helper/ExportExcel";
class ReactDataTableNew extends Component {
  render() {
    const {
      entries = 3,
      entriesOptions = [3, 10, 20, 50, 100],
      isButton = false
    } = this.props;
    return (
      <React.Fragment>
        {isButton && (
          <React.Fragment>
            <button className="btn">Copy</button>
            <CSVLink
              filename="activities.csv"
              separator=" "
              data={this.props.data.rows}
              className="btn"
            >
              CSV
            </CSVLink>

            <ExportExcel data={this.props.data} filename="activities.xlsx" />
            <button className="btn">PDF</button>
            <button className="btn" onClick={() => window.print()}>
              Print
            </button>
          </React.Fragment>
        )}
        <MDBDataTable
          striped
          hover
          responsive
          responsiveSm
          responsiveMd
          responsiveLg
          responsiveXl
          data={this.props.data}
          entriesOptions={entriesOptions}
          entries={entries}
        />
      </React.Fragment>
    );
  }
}

export default ReactDataTableNew;
