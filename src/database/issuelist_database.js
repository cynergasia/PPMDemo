import React from "react";
import { routesURL } from "../constant/routesURL";
import { Link } from "react-router-dom";

const publicSwitch = (id, value = false) => (
  <div class="custom-control custom-switch switch-lg ">
    <input
      type="checkbox"
      class="custom-control-input"
      id={`switch-${id}`}
      defaultChecked={value}
    />
    <label class="custom-control-label" for={`switch-${id}`} />
  </div>
);

const data = props => ({
  // ===================IsuueList For ProjectWiki=======================
  issueList: [
    {
      page: "projectwiki",
      i_id: "e5a84a85-30d8-406a-9c47-743e873dec94",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "e5a84a85-30d8-406a-9c47-743e873dec94"}
        >
          I1
        </Link>
      ),
      name: "PM Time not included",
      title: "PM Time not included",
      due_date: "03-01-19",
      complete: "80%",
      status: "Overdue",
      issue_status: "Overdue",
      workpackage: "1.01",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/ee36cf63-b54e-4a14-8422-91b731b148b4"
          className="text-primary"
        >
          @Neeraj
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("28205", true),
      days: "65",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "1c5d1ee3-edc8-4dc5-97a5-d70e0aee36bb",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "1c5d1ee3-edc8-4dc5-97a5-d70e0aee36bb"}
        >
          I2
        </Link>
      ),
      name: "Model missing cart path modification",
      title: "Model missing cart path modification",
      due_date: "06-10-19",
      complete: "30%",
      status: "Overdue",
      issue_status: "Overdue",
      workpackage: "1.03",
      planned_effort: "10",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      actual_effort: "0",
      remaining: "10",
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("97846"),
      days: "25",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "5362a855-0195-4fa7-aa15-f18c1d711bb7",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "5362a855-0195-4fa7-aa15-f18c1d711bb7"}
        >
          I3
        </Link>
      ),
      name: "Rebar estimation revisit",
      title: "Rebar estimation revisit",
      due_date: "06-15-19",
      complete: "60%",
      status: "Overdue",
      issue_status: "Overdue",
      workpackage: "1.04",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("3350"),
      days: "25",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "bd88878e-1101-4ab6-a36d-beac2b684597",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "bd88878e-1101-4ab6-a36d-beac2b684597"}
        >
          I4
        </Link>
      ),
      name: "Change in scope might increase liability",
      title: "Change in scope might increase liability",
      due_date: "05-15-19",
      complete: "40%",
      status: "Overdue",
      issue_status: "Overdue",
      workpackage: "1.04",
      planned_effort: "20",
      actual_effort: "10",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("1328"),
      days: "35",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "76acd683-7175-4c8c-98e8-d3a70886acad",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "76acd683-7175-4c8c-98e8-d3a70886acad"}
        >
          I5
        </Link>
      ),
      name: "Unapproved Changes to project plan",
      title: "Unapproved Changes to project plan",
      due_date: "07-20-19",
      complete: "800%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "1.04",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("81038"),
      days: "35",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "7239eb52-1060-429a-a1d5-66a0da2a2406",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "7239eb52-1060-429a-a1d5-66a0da2a2406"}
        >
          I6
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "07-20-19",
      complete: "60%",
      status: "Overdue",
      issue_status: "In Progress",
      workpackage: "DESIGN(1.02)",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/eecb7a0e-c560-415a-9d7b-4657d0169adb"
          className="text-primary"
        >
          @Suresh,
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("16183", true),
      days: "45",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "1d6aa4df-7651-487e-ac93-c07da567578d",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "1d6aa4df-7651-487e-ac93-c07da567578d"}
        >
          I7
        </Link>
      ),
      name: "Schedule overrage 1.04",
      title: "Schedule overrage 1.04",
      due_date: "06-10-19",
      complete: "100%",
      status: "Overdue",
      issue_status: "Completed",
      workpackage: "1.04",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("38554"),
      days: "35",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "7823ac89-700e-4032-b49e-fc2f97889770",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "7823ac89-700e-4032-b49e-fc2f97889770"}
        >
          I8
        </Link>
      ),
      name: "Schedule overrage 1.03",
      title: "Schedule overrage 1.03",
      due_date: "06-11-19",
      complete: "100%",
      status: "Overdue",
      issue_status: "Completed",
      workpackage: "1.03",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("38554"),
      days: "35",
      description: ""
    },
    {
      page: "projectwiki",
      i_id: "4186bf0a-750a-4a7b-b470-f8429318aff7",
      projectId: "60453005",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "4186bf0a-750a-4a7b-b470-f8429318aff7"}
        >
          I9
        </Link>
      ),
      name: "Schedule overrage 1.02",
      title: "Schedule overrage 1.02",
      due_date: "06-12-19",
      complete: "100%",
      status: "Overdue",
      issue_status: "Completed",
      workpackage: "1.02",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("38554"),
      days: "35",
      description: ""
    }
  ],

  // ===================IsuueList For Dashboard=======================
  dashboard: [
    {
      page: "dashboard",
      i_id: "a1c6c36f-3025-4b2f-97cb-cf876cee1a24",
      projectId: "60453005",
      workpackage: "1.01",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "a1c6c36f-3025-4b2f-97cb-cf876cee1a24"}
        >
          I1
        </Link>
      ),
      name: "PM Time not included",
      title: "PM Time not included",
      due_date: "08-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Overdue",
      complete: "80%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("84142"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "947e72d5-76a5-44e0-99c5-61fee1b9db48",
      projectId: "60453005",
      workpackage: "1.03",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "947e72d5-76a5-44e0-99c5-61fee1b9db48"}
        >
          I2
        </Link>
      ),
      name: "Model missing cart path modification",
      title: "Model missing cart path modification",
      due_date: "10-Jun-19",
      planned_effort: "10",
      actual_effort: "",
      remaining: "10",
      issue_status: "Overdue",
      complete: "30%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("64595"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "7c1e8e0a-cd8d-4ae6-b234-99820721d718",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "7c1e8e0a-cd8d-4ae6-b234-99820721d718"}
        >
          I3
        </Link>
      ),
      name: "Rebar estimation revisit",
      title: "Rebar estimation revisit",
      due_date: "15-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Overdue",
      complete: "60%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("12123"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "6146dfdd-2f8e-4b17-a8b1-361cd9a9f726",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "6146dfdd-2f8e-4b17-a8b1-361cd9a9f726"}
        >
          I4
        </Link>
      ),
      name: "Change in scope might increase liability",
      title: "Change in scope might increase liability",
      due_date: "14-Jun-19",
      planned_effort: "20",
      actual_effort: "10",
      remaining: "",
      issue_status: "Overdue",
      complete: "40%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("16872"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "91f3ef93-880e-4bf3-9aa0-077852eec387",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "91f3ef93-880e-4bf3-9aa0-077852eec387"}
        >
          I5
        </Link>
      ),
      name: "Unapproved Changes to project plan",
      title: "Unapproved Changes to project plan",
      due_date: "20-Jul-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "In Progress",
      complete: "80%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("81430"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "8df7eb34-089e-447a-b4ce-9b4a6c4fc64f",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "8df7eb34-089e-447a-b4ce-9b4a6c4fc64f"}
        >
          I6
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "20-Jul-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "In Progress",
      complete: "60%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("59754"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "6cde40fc-a580-43eb-a705-11784323908e",
      projectId: "60453007",
      workpackage: "1.01",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "6cde40fc-a580-43eb-a705-11784323908e"}
        >
          I1
        </Link>
      ),
      name: "PM Time not included",
      title: "PM Time not included",
      due_date: "01-Mar-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "In Progress",
      complete: "90%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("73589"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "ffbee717-c8b8-44b2-afc2-d7692cc5faed",
      projectId: "60453009",
      workpackage: "1.03",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "ffbee717-c8b8-44b2-afc2-d7692cc5faed"}
        >
          I2
        </Link>
      ),
      name: "Model missing cart path modification",
      title: "Model missing cart path modification",
      due_date: "30-Sep-19",
      planned_effort: "10",
      actual_effort: "",
      remaining: "10",
      issue_status: "In Progress",
      complete: "1%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("91729"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "6afb857f-69e0-4185-9272-1fef8143f911",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "6afb857f-69e0-4185-9272-1fef8143f911"}
        >
          I3
        </Link>
      ),
      name: "Rebar estimation revisit",
      title: "Rebar estimation revisit",
      due_date: "30-Jul-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "In Progress",
      complete: "30%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("68476"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "88b88fe9-0ce7-4431-8dff-4410dd19a5e2",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "88b88fe9-0ce7-4431-8dff-4410dd19a5e2"}
        >
          I4
        </Link>
      ),
      name: "Change in scope might increase liability",
      title: "Change in scope might increase liability",
      due_date: "12-Jun-19",
      planned_effort: "20",
      actual_effort: "10",
      remaining: "",
      issue_status: "Overdue",
      complete: "40%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("92607"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "f180a84f-97ad-462a-b8b0-d6a440081826",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "f180a84f-97ad-462a-b8b0-d6a440081826"}
        >
          I5
        </Link>
      ),
      name: "Unapproved Changes to project plan",
      title: "Unapproved Changes to project plan",
      due_date: "19-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Overdue",
      complete: "80%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("77442"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "ea2fd7c8-b961-4caf-b105-02aa0a772368",
      projectId: "60453013",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "ea2fd7c8-b961-4caf-b105-02aa0a772368"}
        >
          I6
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "20-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Overdue",
      complete: "90%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("39252"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "b7b8f2bd-1004-4237-89f9-342d996959f8",
      projectId: "60453013",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "b7b8f2bd-1004-4237-89f9-342d996959f8"}
        >
          I6
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "20-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Overdue",
      complete: "90%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("57574"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "0d1d78a0-6825-4e5b-9c62-5b58a89bfd48",
      projectId: "60453005",
      workpackage: "1.01",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "0d1d78a0-6825-4e5b-9c62-5b58a89bfd48"}
        >
          I7
        </Link>
      ),
      name: "PM Time not included",
      title: "PM Time not included",
      due_date: "08-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("61406"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "3a6d4147-c595-409a-aff9-856ff8efbc25",
      projectId: "60453005",
      workpackage: "1.03",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "3a6d4147-c595-409a-aff9-856ff8efbc25"}
        >
          I8
        </Link>
      ),
      name: "Model missing cart path modification",
      title: "Model missing cart path modification",
      due_date: "10-Jun-19",
      planned_effort: "10",
      actual_effort: "",
      remaining: "10",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("12344"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "b49c34c9-e155-4da6-930e-f79e79f3c0fa",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "b49c34c9-e155-4da6-930e-f79e79f3c0fa"}
        >
          I9
        </Link>
      ),
      name: "Rebar estimation revisit",
      title: "Rebar estimation revisit",
      due_date: "15-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("79127"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "9bafbfb2-b850-48ef-bef2-e83c7de49b9b",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "9bafbfb2-b850-48ef-bef2-e83c7de49b9b"}
        >
          I10
        </Link>
      ),
      name: "Change in scope might increase liability",
      title: "Change in scope might increase liability",
      due_date: "14-Jun-19",
      planned_effort: "20",
      actual_effort: "10",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("44532"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "a5acbb8a-2a13-416a-bf59-239113de0442",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "a5acbb8a-2a13-416a-bf59-239113de0442"}
        >
          I11
        </Link>
      ),
      name: "Unapproved Changes to project plan",
      title: "Unapproved Changes to project plan",
      due_date: "08-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("50640"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "b5c790dc-21ed-493a-a2c8-14500a750628",
      projectId: "60453005",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "b5c790dc-21ed-493a-a2c8-14500a750628"}
        >
          I12
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "10-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("53507"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "b865e9af-0415-46b3-8587-785ea4f4f212",
      projectId: "60453007",
      workpackage: "1.01",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "b865e9af-0415-46b3-8587-785ea4f4f212"}
        >
          I13
        </Link>
      ),
      name: "PM Time not included",
      title: "PM Time not included",
      due_date: "15-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("3480"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "bc2dbc16-c587-4ba3-9bd3-53b858336b4c",
      projectId: "60453009",
      workpackage: "1.03",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "bc2dbc16-c587-4ba3-9bd3-53b858336b4c"}
        >
          I14
        </Link>
      ),
      name: "Model missing cart path modification",
      title: "Model missing cart path modification",
      due_date: "14-Jun-19",
      planned_effort: "10",
      actual_effort: "",
      remaining: "10",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("46560"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "375b3bbe-60ac-488c-aae8-3ce3f3c1dc1c",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "375b3bbe-60ac-488c-aae8-3ce3f3c1dc1c"}
        >
          I15
        </Link>
      ),
      name: "Rebar estimation revisit",
      title: "Rebar estimation revisit",
      due_date: "08-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("10192"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "27c47ee5-5d8b-4114-bd0e-017e65f3710e",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "27c47ee5-5d8b-4114-bd0e-017e65f3710e"}
        >
          I16
        </Link>
      ),
      name: "Change in scope might increase liability",
      title: "Change in scope might increase liability",
      due_date: "10-Jun-19",
      planned_effort: "20",
      actual_effort: "10",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("66506"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "1cf48a0a-c6f6-4743-b441-d9aab0f5351e",
      projectId: "60453009",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "1cf48a0a-c6f6-4743-b441-d9aab0f5351e"}
        >
          I17
        </Link>
      ),
      name: "Unapproved Changes to project plan",
      title: "Unapproved Changes to project plan",
      due_date: "15-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("42542"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "d650e402-fca5-44e4-908d-dee180168791",
      projectId: "60453013",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "d650e402-fca5-44e4-908d-dee180168791"}
        >
          I18
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "14-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("14713"),
      issue_severity: "",
      description: ""
    },
    {
      page: "dashboard",
      i_id: "6ca74543-2bcf-4e2a-acbc-660b4f306e0a",
      projectId: "60453013",
      workpackage: "1.04",
      number: (
        <Link
          className="text-primary"
          to={routesURL.ISSUE_WIKI + "6ca74543-2bcf-4e2a-acbc-660b4f306e0a"}
        >
          I19
        </Link>
      ),
      name: "Workpackage running out of budget",
      title: "Workpackage running out of budget",
      due_date: "20-Jun-19",
      planned_effort: "",
      actual_effort: "",
      remaining: "",
      issue_status: "Completed",
      complete: "100%",
      owner: (
        <a
          href="#/resourcelist/4c3e38e5-532e-4532-a0c3-6d44ece047ed"
          className="text-primary"
        >
          @Arindam
        </a>
      ),
      public: publicSwitch("86760"),
      issue_severity: "",
      description: ""
    }
  ]
});

export default data;
