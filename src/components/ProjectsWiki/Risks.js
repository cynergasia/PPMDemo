import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class Risks extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Risks
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <label>
              <span className="riskItems-projectwiki">High Risk Items : </span>{" "}
              Risk1, Risk9, (...)
            </label>
            <br />
            <label>
              <span className="riskItems-projectwiki">
                Medium Risk Items :{" "}
              </span>{" "}
              Risk4, Risk0, (...)
            </label>{" "}
            <br />
            <Link to="#">More...</Link>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Risks;
