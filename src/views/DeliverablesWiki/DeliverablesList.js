import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DeliverablesTableList from "../../components/DeliverablesWiki/DeliverablesTableList";
import getDeliverableswiki from "../../deliverableswiki_database1";
// import deliverableswiki_database from "../../deliverableswiki_database";

class DeliverablesList extends Component {
  handleChange = (name, value) => {
    switch (name) {
      case "status":
        return console.info(value);

      default:
        return false;
    }
  };

  deliverablesWiki = getDeliverableswiki({
    handleChange: this.handleChange
  });

  render() {
    const { deliverablesList: list1 } = this.deliverablesWiki;
    // const { deliverablesList: list2 } = deliverableswiki_database;
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
                          <i className="fa fa-map-marker" /> Bay Bridge
                          Construction in the bay(P001)
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
              <DeliverablesTableList deliverablesList={list1} />
            </Col>
            {/* <Col sm="12" md="12" lg="12">
              <DeliverablesTableList deliverablesList={list2} />
            </Col> */}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesList;
