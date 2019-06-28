import React, { Component } from "react";
import {Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
import database from "../../database/database";

class Financial extends Component {
  render() {
    const {
      contractValue,
      changeOrders,
      totalCost,
      totalBilled,
      totalPaid,
      backlog,
      overdue
    } = database.financialDetails;
    return (
      <React.Fragment>
        <Row className="financial-detail">
          <Col sm="12" md="6" lg="5">
            <label>
              <span className="financial-title">Contract Value:</span>{" "}
              {contractValue}
            </label>
            <br />
            <label>
              <span className="financial-title">Change Orders:</span>{" "}
              {changeOrders}{" "}
            </label>
            <br />
            <label>
              <span className="financial-title">Total Cost:</span>{" "}
              {totalCost}{" "}
            </label>
          </Col>
          <Col sm="12" md="6" lg="5">
            <label>             
              
                  {" "}
                  <span className="financial-title">Total Billed:</span> <Link to={routesURL.INVOICE_LIST}>{totalBilled} </Link>
               {" "}
            </label>
            <br />
            <label>
              <span className="financial-title">Total Paid:</span> {totalPaid}
            </label>
            <br />
            <label>
              <span className="financial-title">Backlog:</span> {backlog} (<span className="financial-title">
                Overdue:
              </span>{" "}
              {overdue})
            </label>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Financial;
