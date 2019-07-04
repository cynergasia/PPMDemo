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

class Submenu extends Component {
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
    const { refs, name, link, id } = this.props;
    return (
      <nav className="sub-navbar navbar-fixed-top" aria-label="breadcrumb">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" area-current="page">
                <i className="fa fa-map-marker" />
                <Link to={routesURL.PROJECT_WIKI + "60453005"}>
                  {" "}
                  Extensions N/Cape Mall Phase 3 (60453005)
                </Link>{" "}
                {name && <span>: {name}</span>}
              </li>
            </ol>
            <ol className="breadcrumb left-breadcrumb">
              {/*TASK WIKI*/}
              {link === "task" && (
                <>
                  {" "}
                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.WBS}>
                      <i className="fa fa-check-square" /> Wbs Register
                    </Link>
                  </li>
                </>
              )}
              {/* WORKPACKAGE */}
              {link === "workpackage" && (
                <>
                  {" "}
                  <li className="nav-head active" aria-current="page">
                    <Link
                      exact
                      to={routesURL.WORKPACKAGE_LIST + "?page=projectwiki"}
                    >
                      <i className="fa fa-check-square" /> WorkPackage Register
                    </Link>
                  </li>
                </>
              )}
              {/*MEETING */}
              {link === "meeting" && (
                <>
                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.MEETING_LIST + "all"}>
                      <i className="fa fa-check-square" /> Meeting Register
                    </Link>
                  </li>
                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.PAGE_NOT_FOUND}>
                      <i className="fa fa-save" /> Save
                    </Link>
                  </li>
                </>
              )}
              {/*INVOICEWIKI*/}
              {link === "invoiceWiki" && (
                <>
                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.INVOICE_LIST}>
                      <i className="fa fa-sitemap" /> Invoce List
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={e => {
                        this.scrollTo(e, refs["descriptionRef"]);
                      }}
                    >
                      <i className="fa fa-sitemap" /> Basic Info
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={e => {
                        this.scrollTo(e, refs["approvedStatusRef"]);
                      }}
                    >
                      <i className="fa fa-check-square" /> Activities
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link exact to={routesURL.PAGE_NOT_FOUND}>
                      <i className="fa fa-usd" /> Approve Invoice
                    </Link>
                  </li>
                </>
              )}

              {/*DELIVERABLE*/}
              {link === "deliverable" && (
                <>
                  <li className="nav-head active " aria-current="page">
                    <Link exact to={routesURL.DELIVERABLES_LIST}>
                      <i className="fa fa-check-square px-1" />Deliverables
                      Register
                    </Link>
                  </li>
                  {/* <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={e => {
                        this.scrollTo(e, refs["deliverableRef"]);
                      }}
                    >
                      <i className="fa fa-refresh px-1" />Deliverables
                    </Link>
                  </li>
                  <li className="nav-head active " aria-current="page">
                    <Link
                      exact
                      to="#"
                      onClick={e => {
                        this.scrollTo(e, refs["approvedStatus"]);
                      }}
                    >
                      <i className="fa fa-check-square" /> Approval Status
                    </Link>
                  </li> */}
                  <li className="nav-head active " aria-current="page">
                    <Link exact to="#">
                      <i className="fa fa-user-secret" /> Associations
                    </Link>
                  </li>

                  <li className="nav-head active" aria-current="page">
                    <Link exact to={routesURL.PAGE_NOT_FOUND}>
                      <i className="fa fa-save" /> Save
                    </Link>
                  </li>
                </>
              )}

              {keylist.map(
                (list, index) =>
                  this.state[list] && (
                    <li className="nav-head active" aria-current="page">
                      {link === "projectwiki" &&
                        menulist[index][list][0] === "Follow" && (
                          <>
                            <Link
                              exact
                              to={routesURL.PSR + id}
                              className="cursor-pointer"
                            >
                              <i className="fa fa-check-square" /> PSR{" "}
                              <i className="px-2" />
                            </Link>
                            {/* <Link
                              exact
                              to="#"
                              onClick={e => {
                                this.scrollTo(e, refs["riskStatusRef"]);
                              }}
                            >
                              <i className="fa fa-exclamation-triangle" /> Risks
                              <i className="px-2" />
                            </Link> */}
                          </>
                        )}
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
