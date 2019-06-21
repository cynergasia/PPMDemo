import React from "react";
import { routesURL } from "./constant/routesURL";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const ProjectStatusReport = React.lazy(() =>
  import("./views/ProjectStatusReport/ProjectStatusReport.js")
);
const ProjectWiki = React.lazy(() => import("./views/ProjectWiki/ProjectWiki"));

const DeliverablesWiki = React.lazy(() =>
  import("./views/DeliverablesWiki/DeliverablesWiki")
);
const WorkPackageWiki = React.lazy(() =>
  import("./views/WorkPackageWiki/WorkPackageWiki")
);
const TaskWiki = React.lazy(() => import("./views/TaskWiki/TaskWiki"));
const Meeting = React.lazy(() => import("./views/Meetings/Meeting"));

///Reamaing Pages
const MettingList = React.lazy(() => import("./views/Meetings/MettingList"));
const ActivitiesList = React.lazy(() => import("./views/Activities/ActivitiesList"));
const IssueList = React.lazy(() => import("./views/IssueWiki/IssueList"));
const IssueWiki = React.lazy(() => import("./views/IssueWiki/IssueWiki"));
// const ResourcesList = React.lazy(() => import("./views/ProjectWiki/ResourcesList"));
 const DeliverablesList = React.lazy(() => import("./views/DeliverablesWiki/DeliverablesList"));

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
    path: `${routesURL.DELIVERABLES_WIKI}:id`,
    component: DeliverablesWiki,
    title: "Deliverables Wiki"
  },
  {
    path: routesURL.DELIVERABLES_LIST,
    component: DeliverablesList,
    title: "Deliverables List"
  },
  {
    path: `${routesURL.WORKPACKAGE_WIKI}:id`,
    component: WorkPackageWiki,
    title: "WorkPackage Wiki"
  },
  {
    path: routesURL.TASK_WIKI,
    component: TaskWiki,
    title: "Task Wiki"
  },
  {
    path: routesURL.MEETING,
    component: Meeting,
    title: "Meetings Home"
  },
  {
    path: routesURL.MEETING_LIST,
    component: MettingList,
    title: "Meetings List"
  },
  {
    path: routesURL.ISSUE_WIKI,
    component: IssueWiki,
    title: "Issue Home"
  },
  {
    path: routesURL.ISSUE_LIST,
    component: IssueList,
    title: "Issue List"
  },
  {
    path: routesURL.ACTIVITIES_LIST,
    component: ActivitiesList
  },
  // {
  //   path: `${routesURL.RESOURCE_LIST}:id`,
  //   component: ResourcesList,
  //   title: "Resource Allocation"
  // }
];

export default routes;
