import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
// import "mdbreact/dist/css/mdb.css";

export class ReactDataTableNew extends Component {
  render() {
    const { entries = 3, entriesOptions = [3, 10, 20, 50, 100] } = this.props;
    return (
      <React.Fragment>
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
          exportToCSV
        />
      </React.Fragment>
    );
  }
}

export default ReactDataTableNew;
