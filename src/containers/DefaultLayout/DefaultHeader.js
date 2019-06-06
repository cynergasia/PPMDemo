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
import Profile from './ProfileAside';
import MiscAside from './MiscAside';

import {
  AppAsideToggler, 
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import sygnet from "../../assets/img/brand/sygnet.svg";
import img1 from "../../assets/img/avatars/6.jpg";
import Popup from "./Popup";
import { routesURL } from "../../constant/routesURL";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  
  signOut(e) {
    e.preventDefault();
    //this.props.history.push("/login");
    window.location.hash = "/login";
  }
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
  
    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        <AppAsideToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 30, height: 30, alt: "ANS Corp" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "ANS Corp" }}
        />
        
        <p className="project-name">ANS Corp - {this.props.title} </p>

        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> Project Dashboard*/}

        <Nav className="d-md-down-none" navbar />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            {/* <NavLink tag={Link} to="/projectwiki" className="nav-link"> */}             
              <Popup />
            {/* </NavLink> */}
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
            <NavLink tag={Link} to={routesURL.DASHBOARD} className="nav-link">
              <i className="fa fa-home" aria-hidden="true" />
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <AppHeaderDropdown direction="down">
              <DropdownToggle nav>
                <i
                  className="fa fa-star-o"
                  aria-hidden="true"
                  style={{ fontSize: "23px", verticalAlign: "center" }}
                />
              </DropdownToggle>
              <DropdownMenu right style={{ right: "auto" }}>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Most Recent</strong>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={Link}
                    to={routesURL.PAGE_NOT_FOUND}
                    className="nav-link"
                  >
                    Project1
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={Link}
                    to={routesURL.PAGE_NOT_FOUND}
                    className="nav-link"
                  >
                    Project4
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={Link}
                    to={routesURL.PAGE_NOT_FOUND}
                    className="nav-link"
                  >
                    Project8
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    tag={Link}
                    to={routesURL.PAGE_NOT_FOUND}
                    className="nav-link"
                  >
                    Project6
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </AppHeaderDropdown>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={routesURL.PAGE_NOT_FOUND}
              className="nav-link"
            >
              {" "}
              <i className="fa fa-calendar" aria-hidden="true" />{" "}
              {/* <AppAsideToggler className="fa fa-calendar"  /> */}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={routesURL.PAGE_NOT_FOUND}
              className="nav-link"
            >
              {" "}
              <AppAsideToggler className="fa fa-pencil-square-o" display="lg" />
              {/* <i className="fa fa-pencil-square-o" aria-hidden="true" />{" "} */}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none comments-boxs">
            <NavLink tag={Link} to="#" className="nav-link">
            <AppAsideToggler className="fa fa-comments" display="lg" />
              {/* <i className="fa fa-comments" aria-hidden="true" /> */}
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink
              tag={Link}
              to={routesURL.PAGE_NOT_FOUND}
              className="nav-link"
            >
              {" "}
              <i className="fa fa-bell" aria-hidden="true" />{" "}
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          {/* className="fa fa-th" */}
          {/* <AppAsideToggler className="d-md-down-none" display="lg" /> */}
          <MiscAside/>
          <Profile onLogout={e => this.signOut(e)} />
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
