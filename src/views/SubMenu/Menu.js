import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="">
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div class="row">
            <div class="col-12 col-sm-12 col-lg-6">
              <ol className="breadcrumb left-breadcrumb">
                <li className="breadcrumb-item">
                  <h4>Customer</h4>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="#/">
                    ABC Corp.
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="#/">
                    {" "}
                    HDR Inc.
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to="#/">
                    AECOM
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to="#/">
                    {" "}
                    XYZ Inc.
                  </Link>
                </li>
              </ol>
            </div>
            <div class="col-12 col-sm-12 col-lg-6">
              <ol className="breadcrumb right-breadcrumb">
                <li className="head breadcrumb-item">
                  <center>
                    <h4>Project</h4>
                  </center>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project1">
                    Project1
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project2">
                    Project2
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project3">
                    Project3
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project4">
                    Project4
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project5">
                    Project5
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link exact to="/psr/project6">
                    Project6
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
