import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
// import WBSList_IMG from "../../assets/img/WBSList.png";
import { Link } from "react-router-dom";

class Budget extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectwiki/60453005">
                          <i className="fa fa-map-marker" /> Extensions N/Cape
                          Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Card>
                <CardBody style={{ height: "calc(100vh - 12rem)" }}>
                  <iframe
                    className="w-100 h-100"
                    title="Budget"
                    src="http://clientapp.narola.online/HD/PACE1/Budget.html"
                    frameborder="0"
                  ></iframe>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Budget;
