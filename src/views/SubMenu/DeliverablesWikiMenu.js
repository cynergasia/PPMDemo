import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class DeliverablesWikiMenu extends Component {
  scrollTo = ({ current: ref }) => {
    let scrollRef = ReactDOM.findDOMNode(ref);
    let scrollOptions = {
      left: 0,
      top: scrollRef.offsetTop,
      behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
  };
  render() {
    const { refs } = this.props;
    return (
      <React.Fragment>
        <div className="">
          <nav className="sub-navbar" aria-label="breadcrumb">
            <div class="row">
              <div class="col-12 col-sm-12 col-lg-12">
                <ol className="breadcrumb left-breadcrumb">
                  <li className="nav-head active" area-current="page">
                    <i className="fa fa-map-marker" /> Bay Bridge Construction
                    design(P0001)
                  </li>
                </ol>
                <ol className="breadcrumb left-breadcrumb">
                  <li className="nav-head active" aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={() => this.scrollTo(refs.activityLogRef)}
                    >
                      <i className="cui-comment-square" /> Comment
                    </Link>
                  </li>

                  <li className="nav-head active " aria-current="page">
                    <Link exact to="#">
                      <i className="fa fa-user-secret" /> Assign
                    </Link>
                  </li>

                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={() => this.scrollTo(refs.approvedStatus)}
                    >
                      <i className="fa fa-check-square" /> Approved Status
                    </Link>
                  </li>

                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={() => this.scrollTo(refs.activityLogRef)}
                    >
                      <i className="fa fa-clipboard" /> Activity Log
                    </Link>
                  </li>

                  <li className="nav-head active " aria-current="page">
                    <Link exact to="#">
                      <i className="fa fa-rss" /> Follow
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliverablesWikiMenu;
