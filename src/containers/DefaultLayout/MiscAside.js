import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";
import { AppAsideToggler } from "@coreui/react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};
class MiscAside extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => this.props.toggleMisc()}
            >
              {this.props.isMisc ? (
                <AppAsideToggler
                  className="fa fa-close text-muted"
                  defaultOpen={true}
                  display="lg"
                />
              ) : (
                <button className="">
                  <span className="fa fa-close" />
                </button>
              )}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <Row>
              <Col md="4" className="text-center">
                <Link to={routesURL.DASHBOARD}>
                  <i className="fa fa-clock-o" style={{ fontSize: "50px" }} />
                  <br />
                  Time
                </Link>
              </Col>

              <Col md="4" className="text-center">
                <Link to={routesURL.PROJECT_WIKI}>
                  <i className="fa fa-bars" style={{ fontSize: "50px" }} />{" "}
                  Expense
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to={routesURL.PROJECT_WIKI}>
                  <i className="fa fa-bandcamp" style={{ fontSize: "50px" }} />{" "}
                  Workday Application
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to={routesURL.PROJECT_WIKI}>
                  <i className="fa fa-circle-o" style={{ fontSize: "50px" }} />{" "}
                  Oracle fusion
                </Link>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}
MiscAside.propTypes = propTypes;
MiscAside.defaultProps = defaultProps;
export default MiscAside;
