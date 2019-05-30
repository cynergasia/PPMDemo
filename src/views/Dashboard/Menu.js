import React, { Component } from 'react';


class Menu extends Component {

    render() {
        return (
               <div className="">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-6">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="breadcrumb-item"><h4>Customer</h4></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">ABC Corp.</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/"> HDR Inc.</a></li>
                      <li className="nav-head active " aria-current="page"><a href="#/">AECOM</a></li>
                      <li className="nav-head active " aria-current="page"><a href="#/"> XYZ Inc.</a></li>
                    </ol>
                  </div>
                  <div class="col-12 col-sm-12 col-lg-6">
                    <ol className="breadcrumb right-breadcrumb">
                      <li className="head breadcrumb-item"><center><h4>Project</h4></center></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project1</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project2</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project3</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project4</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project5</a></li>
                      <li className="nav-head active" aria-current="page"><a href="#/">Project6</a></li>
                    </ol>
                  </div>
                </div>

              </nav>
            </div>
        )
    }
}

export default Menu