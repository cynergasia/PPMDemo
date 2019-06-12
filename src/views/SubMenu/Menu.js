import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
import database from "../../database";

class Menu extends Component {
  render() {
    return this.props.id ? (
      <div className="">
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Customer</h4>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                    ABC Corp.
                  </Link>
                </li>
              </ol>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Project</h4>
              <ol className="breadcrumb right-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact="true" to={routesURL.PROJECT_WIKI}>
                    {this.props.id}
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </div>
    ) : (
      <div className="">
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Customer</h4>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                    ABC Corp.
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                    {" "}
                    HDR Inc.
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                    AECOM
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                    {" "}
                    XYZ Inc.
                  </Link>
                </li>
              </ol>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Project</h4>
              <ol className="breadcrumb right-breadcrumb">
                {database.projects.map(project => (
                  <li className="nav-head active" aria-current="page">
                    <Link exact="true" to={routesURL.PSR + project.id}>
                      {project.id}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
