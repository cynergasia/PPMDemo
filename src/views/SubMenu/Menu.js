import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

class Menu extends Component {
  render() {
    

    return (
      this.props.id ?<div className="">
      <nav className="sub-navbar" aria-label="breadcrumb">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-6 d-flex">
            <h4 className="customer-title">Customer</h4>
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" aria-current="page">
                <Link exact to={routesURL.PAGE_NOT_FOUND}>
                  ABC Corp.
                </Link>
              </li>              
            </ol>
          </div>
          <div class="col-12 col-sm-12 col-lg-6 d-flex">
            <h4 className="customer-title">Project</h4>
            <ol className="breadcrumb right-breadcrumb">
              <li className="nav-head active" aria-current="page">
                <Link exact to={routesURL.PSR + "project1"}>
                  {this.props.id}
                </Link>
              </li>             
            </ol>
          </div>
        </div>
      </nav>
    </div>:(
      <div className="">
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div class="row">
            <div class="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Customer</h4>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PAGE_NOT_FOUND}>
                    ABC Corp.
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PAGE_NOT_FOUND}>
                    {" "}
                    HDR Inc.
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to={routesURL.PAGE_NOT_FOUND}>
                    AECOM
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to={routesURL.PAGE_NOT_FOUND}>
                    {" "}
                    XYZ Inc.
                  </Link>
                </li>
              </ol>
            </div>
            <div class="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Project</h4>
              <ol className="breadcrumb right-breadcrumb">
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project1"}>
                    Project1
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project2"}>
                    Project2
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project3"}>
                    Project3
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project4"}>
                    Project4
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project5"}>
                    Project5
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.PSR + "project5"}>
                    Project6
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </div>)
    );
  }
}

export default Menu;
