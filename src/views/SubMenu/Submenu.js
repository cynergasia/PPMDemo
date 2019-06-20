import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
export const menulist = [
  { comment: ["Comment", "activityLogRef", "cui-comment-square"] },
  { wbs: ["WBS", "workPackageRef", "fa fa-sitemap"] },
  { work_package: ["Work Package", "workPackageRef", "fa fa-sitemap"] },
  { issue_changes: ["Issues/Changes", "issueChangesRef", "fa fa-refresh"] },
  { deliverable:["Deliverables", "deliverableRef", "fa fa-refresh"]}, 
  {
    meeting_minutes: [
      "Meeting Minutes",
      "meetingMinutesRef",
      "fa fa-pencil-square"
    ]
  },
  { finanical: ["Financials", "financialsRef", "fa fa-bar-chart"] },
  { activity_log: ["Activity Log", "activityLogRef", "fa fa-clipboard"] },
  { submit:["Submit", "submitRef", "fa fa-sitemap"]},
  { follow: ["Follow", "dummy", "fa fa-rss"] }
];

export const keylist = [
  "comment",
  "wbs",
  "work_package",
  "issue_changes",
  "deliverable", 
  "meeting_minutes",
  "finanical",
  "activity_log",
  "submit",
  "follow"
];

class Submenu extends Component {
  state = {
    comment: true,
    wbs: true,
    work_package:true,
    issue_changes: true,
    deliverable:true,   
    meeting_minutes: true,
    finanical: true,
    activity_log: true,
    submit:true,
    follow: true
  };

  componentDidMount() {
    this.setState({ ...this.props.isMenu });
  }

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
    const { refs, name } = this.props;
    return (
      <nav className="sub-navbar navbar-fixed-top" aria-label="breadcrumb">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" area-current="page">
                <i className="fa fa-map-marker" /><Link to="/projectwiki"> Extensions N/Cape Mall Phase
                3 (60453005)</Link> : {name}
              </li>
            </ol>
            <ol className="breadcrumb left-breadcrumb">
              {/* <li className="nav-head active" aria-current="page">
                    <Link exact to="/500">
                      <i className="fa fa-edit" /> Edit
                    </Link>
                  </li> */}
              {keylist.map(
                (list, index) =>
                  this.state[list] && (
                    <li className="nav-head active" aria-current="page">
                      <Link
                        onClick={() =>
                          this.scrollTo(refs[menulist[index][list][1]])
                        }
                        className="cursor-pointer"
                      >
                        <i className={menulist[index][list][2]} />{" "}
                        {menulist[index][list][0]}
                      </Link>
                    </li>
                  )
              )}
            </ol>
          </div>
        </div>
      </nav>
    );
  }
}
export default Submenu;
