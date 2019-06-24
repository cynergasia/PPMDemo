import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import getChangesList from "../../database/changeslist_database";
import ChangeTableList from "../../components/ChangeWiki/ChangeTableList";

class ChangesList extends Component {
  render() {
    const { changesList } = getChangesList();
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectWiki">
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
              <ChangeTableList changesList={changesList} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangesList;
