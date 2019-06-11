/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class ProjectWikiMenu extends Component {
  scrollTo = ({ current: ref }) => {
    console.log(ref)
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
                    <Link exact to="/500">
                      <i className="fa fa-edit" /> Edit
                    </Link>
                  </li>
                  <li className="nav-head active" aria-current="page">
                    <Link exact to="/500">
                      <i className="cui-comment-square" /> Comment
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      onClick={() => this.scrollTo(refs.workPackageRef)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-sitemap" /> WBS
                    </Link>
                   
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      onClick={() => this.scrollTo(refs.issueChangesRef)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-refresh" /> Issues/Changes
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      onClick={() => this.scrollTo(refs.meetingMinutesRef)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-pencil-square" /> Meeting Minutes
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      onClick={() => this.scrollTo(refs.financialsRef)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-bar-chart" /> Financials
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      onClick={() => this.scrollTo(refs.activityLogRef)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-clipboard" /> Activity Log
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link exact to="/500">
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

export default ProjectWikiMenu;
