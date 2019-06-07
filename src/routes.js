import React from "react";
import { routesURL } from "./constant/routesURL";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const ProjectStatusReport = React.lazy(() =>
  import("./views/ProjectStatusReport/ProjectStatusReport.js")
);
const ProjectWiki = React.lazy(() => import("./views/ProjectWiki/ProjectWiki"));
// const DeliverablesWiki = React.lazy(() =>
//   import("./views/DeliverablesWiki/DeliverablesWiki")
// );
// const DeliverablesList = React.lazy(() =>
//   import("./views/DeliverablesWiki/DeliverablesList")
// );
// const WorkPackageWiki = React.lazy(() =>
//   import("./views/WorkPackageWiki/WorkPackageWiki")
// );
// const TaskWiki = React.lazy(() => import("./views/TaskWiki/TaskWiki"));
// const Meeting = React.lazy(() => import("./views/Meetings/Meeting"));
// const MettingList = React.lazy(() => import("./views/Meetings/MettingList"));

const IssueList = React.lazy(() => import("./views/IssueWiki/IssueList"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: routesURL.DASHBOARD,
    component: Dashboard,
    title: "Project Dashboard"
  },
  {
    path: `${routesURL.PSR}:id`,
    component: ProjectStatusReport,
    title: "Project Status Report"
  },
  {
    path: routesURL.PROJECT_WIKI,
    component: ProjectWiki,
    title: "Project Wiki"
  },
  {
    path: routesURL.ISSUE_LIST,
    component: IssueList,
    title: "Issue List"
  }
  // {
  //   path: routesURL.DELIVERABLES_WIKI,
  //   component: DeliverablesWiki
  // },
  // {
  //   path: routesURL.DELIVERABLES_LIST,
  //   component: DeliverablesList
  // },
  // {
  //   path: routesURL.WORKPACKAGE_WIKI,
  //   component: WorkPackageWiki
  // },
  // {
  //   path: routesURL.TASK_WIKI,
  //   component: TaskWiki
  // },
  // {
  //   path: routesURL.MEETING,
  //   component: Meeting
  // },
  // {
  //   path: routesURL.MEETING_LIST,
  //   component: MettingList
  // },
  // {
  //   path: routesURL.ACTIVITIES_LIST,
  //   component: ActivitiesList
  // },
  // {
  //   path: routesURL.RESOURCE_LIST,
  //   component: ResourcesList
  // }
];

export default routes;
