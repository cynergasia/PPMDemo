import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import RiskTableList from "../../components/RisksWiki/RiskTableList";

class RiskList extends Component {
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
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="#" onClick={this.toggle} className="mr-2">
                          <i className="fa fa-plus-square" /> Create New
                        </Link>
                        <Link to="#">
                          <i className="fa fa-sitemap" /> Save
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
              <RiskTableList riskList={""} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default RiskList;
