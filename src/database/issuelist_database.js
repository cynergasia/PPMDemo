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
  issueList: [
    {
      i_id: "e5a84a85-30d8-406a-9c47-743e873dec94",
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
      i_id: "1c5d1ee3-edc8-4dc5-97a5-d70e0aee36bb",
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
      issue_type: "",
      issue_severity: "",
      public: publicSwitch("97846"),
      days: "25",
      description: ""
    },
    {
      i_id: "5362a855-0195-4fa7-aa15-f18c1d711bb7",
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
      i_id: "bd88878e-1101-4ab6-a36d-beac2b684597",
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
      i_id: "76acd683-7175-4c8c-98e8-d3a70886acad",
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
      i_id: "7239eb52-1060-429a-a1d5-66a0da2a2406",
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
      i_id: "1d6aa4df-7651-487e-ac93-c07da567578d",
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
      i_id: "7823ac89-700e-4032-b49e-fc2f97889770",
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
      i_id: "4186bf0a-750a-4a7b-b470-f8429318aff7",
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
  ]
});

export default data;
