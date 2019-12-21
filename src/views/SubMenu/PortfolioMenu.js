import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

export const menulist = [
  { project: ["Basic Info", "projectInfoRef", "fa fa-sitemap"] },
  { work_package: ["Basic Info", "workPackageRef", "fa fa-sitemap"] },
  { deliverableInfo: ["Basic Info", "deliverableRef", "fa fa-sitemap"] },
  { meetingInfo: ["Basic Info", "meetingMinutesRef", "fa fa-sitemap"] },
  { taskInfo: ["Basic Info", "taskInfoRef", "fa fa-sitemap"] },
  { wbs: ["WBS", "workPackageRef", "fa fa-sitemap"] },
  {
    approvedStatus: ["Approval Status", "approvedStatus", "fa fa-check-square"]
  },
  { issue_changes: ["Issues/Changes", "issueChangesRef", "fa fa-refresh"] },
  { deliverable: ["Deliverables", "deliverableRef", "fa fa-refresh"] },
  { meeting_minutes: ["Meeting", "meetingMinutesRef", "fa fa-pencil-square"] },
  { finanical: ["Financials", "financialsRef", "fa fa-bar-chart"] },
  { risks: ["Risks", "riskStatusRef", "fa fa-exclamation-triangle"] },
  { comment: ["Comment", "activityLogRef", "cui-comment-square"] },
  { activity_log: ["Activity Log", "activityLogRef", "fa fa-clipboard"] },
  { follow: ["Follow", "dummy", "fa fa-rss"] }
];

export const keylist = [
  "project",
  "work_package",
  "deliverableInfo",
  "meetingInfo",
  "taskInfo",
  "wbs",
  "approvedStatus",
  "issue_changes",
  "deliverable",
  "meeting_minutes",
  "finanical",
  "risks",
  "comment",
  "activity_log",
  "follow"
];

class PortfolioMenu extends Component {
  state = {
    comment: true,
    project: true,
    deliverableInfo: true,
    meetingInfo: true,
    taskInfo: true,
    wbs: true,
    risks: true,
    work_package: true,
    approvedStatus: true,
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
        top: scrollRef.offsetTop,
        left: 0,
        behavior: "smooth"
      });
    } catch (e) {
      appBody.scrollTop = scrollRef.offsetTop;
      appBody.scrollLeft = 0;
    }
  };

  render() {
    const { link, id } = this.props;
    // const { refs, name, link, id } = this.props;
    return (
      <nav className="sub-navbar navbar-fixed-top" aria-label="breadcrumb">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <ol className="breadcrumb left-breadcrumb">
              {link === "portfolio" && (
                <>
                  <li className="nav-head active" area-current="page">
                    <Link to="/dashboard">
                      <i className="fa fa-arrow-left mr-2"></i>
                      Go to Dashboard
                    </Link>
                  </li>
                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.PAGE_NOT_FOUND}>
                      <i className="fa fa-save" /> Save
                    </Link>
                  </li>
                </>
              )}
              {link === "backlog" && (
                <>
                  <li className="nav-head active" area-current="page">
                    <Link to={routesURL.PROJECT_WIKI + id}>
                      <i className="fa fa-arrow-left mr-2"></i>
                      Go to ProjectWiki
                    </Link>
                  </li>
                </>
              )}
              {link === "member" && (
                <>
                  <li className="nav-head active" area-current="page">
                    <Link>Welcome {this.props.member}</Link>
                  </li>
                </>
              )}
            </ol>
          </div>
        </div>
      </nav>
    );
  }
}
export default PortfolioMenu;
