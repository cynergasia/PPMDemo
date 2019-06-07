import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

const Summary = props => {
  return (
    <React.Fragment>
      <Col xs="8" sm="4" lg="2" className="pr-0">
        <Card className="text-white bg-info">
          <CardBody className="pb-0">
            <div className="text-value">71.92%</div>
            <Link to="/500">
              <div className="text-summary">Complete</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">8</div>
            <Link to="/500">
              <div className="text-summary"> Active Workpackages</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-warning">
          <CardBody className="pb-0">
            <div className="text-value">26</div>
            <Link to="/500">
              <div className="text-summary">Open Activitiess</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-warning">
          <CardBody className="pb-0">
            <div className="text-value">12</div>
            <Link to="/500">
              <div className="text-summary">Open Issues</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper mx-3" style={{ height: "30px" }} />
        </Card>
      </Col>

      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">5</div>
            <Link to="/500">
              <div className="text-summary">Pending Risks</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper" style={{ height: "30px" }} />
        </Card>
      </Col>
      <Col xs="8" sm="4" lg="2">
        <Card className="text-white bg-success">
          <CardBody className="pb-0">
            <div className="text-value">3</div>
            <Link to="/500">
              <div className="text-summary">Pending Changes</div>
            </Link>
          </CardBody>
          <div className="chart-wrapper" style={{ height: "30px" }} />
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Summary;
