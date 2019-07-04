import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ResourcesTableList from "../../components/Resources/ResourcesTableList";
import user_database from "../../database/user_database";
import { routesURL } from "../../constant/routesURL";

class ResourcesList extends Component {
  render() {
    const { id } = this.props.match.params;
    const { users } = user_database;
    let user = users.filter(item => item.id === id);
    if (user.length === 0) {
      window.location.hash = routesURL.DASHBOARD;
    }

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
                        <i className="fa fa-map-marker" />
                        <Link to={routesURL.PROJECT_WIKI + "60453005"}>
                          Extensions N/Cape Mall Phase 3 (60453005)
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
              <ResourcesTableList user={user[0]} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ResourcesList;
