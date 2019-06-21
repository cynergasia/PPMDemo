import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
export const menulist = [
  { comment: ["Comment", "activityLogRef", "cui-comment-square"] },
  { wbs: ["WBS", "workPackageRef", "fa fa-sitemap"] },
  { work_package: ["Work Package", "workPackageRef", "fa fa-sitemap"] },
  { issue_changes: ["Issues/Changes", "issueChangesRef", "fa fa-refresh"] },
  { deliverable: ["Deliverables", "deliverableRef", "fa fa-refresh"] },
  {
    meeting_minutes: ["Meeting", "meetingMinutesRef", "fa fa-pencil-square"]
  },
  { finanical: ["Financials", "financialsRef", "fa fa-bar-chart"] },
  { activity_log: ["Activity Log", "activityLogRef", "fa fa-clipboard"] },  
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
  "follow"
];

class Submenu extends Component {
  state = {
    comment: true,
    wbs: true,
    work_package: true,
    issue_changes: true,
    deliverable: true,
    meeting_minutes: true,
    finanical: true,
    activity_log: true,    
    follow: true
  };

  componentDidMount() {
    this.setState({ ...this.props.isMenu });
  }

  scrollTo = (e, { current: ref }) => {
    e.persist();
    const scrollRef = ReactDOM.findDOMNode(ref);
    const appBody = document.querySelector(".app-body");
    try {
      appBody.scrollTo({
        left: 0,
        top: scrollRef.offsetTop,
        behavior: "smooth"
      });
    } catch (e) {
      appBody.scrollTop = scrollRef.offsetTop;
    }
  };

  render() {
    const { refs, name,link } = this.props;  
    return (
      <nav className="sub-navbar navbar-fixed-top" aria-label="breadcrumb">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" area-current="page">
                <i className="fa fa-map-marker" />
                <Link to={routesURL.PROJECT_WIKI}>
                  {" "}
                  Extensions N/Cape Mall Phase 3 (60453005)
                </Link>{" "}
                {name && <span>: {name}</span>}
              </li>
            </ol>
            <ol className="breadcrumb left-breadcrumb">
              {/* <li className="nav-head active" aria-current="page">
                    <Link exact to="/500">
                      <i className="fa fa-edit" /> Edit
                    </Link>
                  </li> */}
              {link && (
                <li className="nav-head active" aria-current="page">
                  <Link exact to={routesURL.MEETING_LIST}>
                    <i className="fa fa-check-square" /> Meeting Register
                  </Link>
                </li>
              )}

              {keylist.map(
                (list, index) =>
                  this.state[list] && (
                    <li className="nav-head active" aria-current="page">
                      <Link
                        to="#"
                        onClick={e => {
                          this.scrollTo(e, refs[menulist[index][list][1]]);
                        }}
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
