import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import sygnet from "../../assets/img/brand/sygnet.svg";
import img1 from "../../assets/img/avatars/6.jpg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    console.log("Header", this.props);
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 30, height: 30, alt: "ANS Corp" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "ANS Corp" }}
        />
        <p className="project-name">ANS Corp - Project Dashboard </p>

        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}

        <Nav className="d-md-down-none" navbar />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="#" className="nav-link">
              <i class="fa fa-plus-circle" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <div className="topnav">
            <div className="search-container">
              <form action="/action_page.php" method="post">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="/dashboard" className="nav-link">
              <i class="fa fa-home" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <AppHeaderDropdown direction="down">
              <DropdownToggle nav>
                <i
                  class="fa fa-star-o"
                  aria-hidden="true"
                  style={{ fontSize: "23px", verticalAlign: "center" }}
                />
              </DropdownToggle>
              <DropdownMenu right style={{ right: "auto" }}>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Most Recent</strong>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/500" className="nav-link">
                    Project1
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/500" className="nav-link">
                    Project4
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/500" className="nav-link">
                    Project8
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/500" className="nav-link">
                    Project6
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </AppHeaderDropdown>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="#" className="nav-link">
              {" "}
              <i class="fa fa-calendar" aria-hidden="true" />{" "}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="#" className="nav-link">
              {" "}
              <i class="fa fa-pencil-square-o" aria-hidden="true" />{" "}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="#" className="nav-link">
              <i class="fa fa-comments" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink tag={Link} to="#" className="nav-link">
              {" "}
              <i class="fa fa-bell" aria-hidden="true" />{" "}
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          {/* className="fa fa-th" */}
          <AppAsideToggler className="d-md-down-none" mobile />
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img
                src={img1}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right style={{ right: "auto" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-bell-o" /> Updates<Badge color="info">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-envelope-o" /> Messages<Badge color="success">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks" /> Tasks<Badge color="danger">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments" /> Comments<Badge color="warning">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-usd" /> Payments<Badge color="secondary">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file" /> Projects<Badge color="primary">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fa fa-shield" /> Lock Account
              </DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
