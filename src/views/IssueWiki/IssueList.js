import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import IssueTableList from "../../components/IssueWiki/IssueTableList";
import getIssueList from "../../database/issuelist_database";

class IssueList extends Component {
  state = {
    isModal: false
  };
  toggle = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    let search = new URLSearchParams(this.props.location.search);
    let searchPage = search.get("page");
    let projectid = search.get("p");

    let { id } = this.props.match.params;
    if (id === "Started") id = "In Progress";
    const { issueList, dashboard } = getIssueList();

    let issueLists = searchPage === "dashboard" ? dashboard : issueList;

    const newIssueList = issueLists
      .filter(
        item =>
          id === "all"
            ? item
            : id === "open"
              ? item.issue_status !== "Completed"
              : item.issue_status === id
      )
      .filter(
        item =>
          searchPage !== "dashboard" ? item.projectId === projectid : item
      )
      .map(item => ({
        projectId: item.projectId,
        number: item.number,
        name: item.name,
        due_date: item.due_date,
        complete: item.complete,
        status: item.issue_status,
        workpackage: item.workpackage,
        planned_effort: item.planned_effort,
        actual_effort: item.actual_effort,
        // owner: item.owner,
        remaining: item.remaining,
        issue_type: item.issue_type,
        issue_severity: item.issue_severity,
        description: item.description,
        public: item.public
      }));

    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectwiki/60453005">
                          <i className="fa fa-map-marker" /> Extensions N/Cape
                          Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="#" className="mr-2">
                          <i className="fa fa-save" /> Save
                        </Link>
                        <Link to="#" onClick={this.toggle} className="mr-2">
                          <i className="fa fa-plus-square" /> Create New
                        </Link>
                        <Link to="#">
                          <i className="fa fa-edit" /> Edit
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <IssueTableList
                isModal={this.state.isModal}
                issueList={newIssueList}
                toggle={this.toggle}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default IssueList;
