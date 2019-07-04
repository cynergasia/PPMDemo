import React from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../constant/routesURL";

const publicSwitch = (id, value = false) => (
  <div class="custom-control custom-switch switch-lg">
    <input
      type="checkbox"
      class="custom-control-input"
      id={`switch-${id}`}
      defaultChecked={value}
    />
    <label class="custom-control-label" for={`switch-${id}`} />
  </div>
);

const database = [
  {
    type: "task",
    wbsNumber: "1",
    name: "structural",
    duration: "411",
    start_date: "01-01-2019",
    end_date: "02-16-2020",
    resources: "",
    estimatehours: "2156",
    actualhours: "1048",
    remaininghours: "1656",
    complete: "48.61%",
    public: publicSwitch("11111"),

    // WorkPackage From ProjectWiki


    workPackages: [
      // {
      //   id: "d588dc46-d7a8-4ac4-ad12-f0ff3914cebf",
      //   deliverable: "1",
      //   issues: "0",
      //   changes: "0",
      //   type: "WorkPackage",
      //   wbsType: "Admin",
      //   wbsNumber: "1.01",
      //   name: (
      //     <Link
      //       className="text-primary"
      //       to={
      //         routesURL.WORKPACKAGE_WIKI +
      //         "d588dc46-d7a8-4ac4-ad12-f0ff3914cebf"
      //       }
      //     >
      //       Admin
      //     </Link>
      //   ),
      //   duration: "60",
      //   start_date: "01-01-2019",
      //   end_date: "03-02-2019",
      //   resources: "SP",
      //   estimatehours: "300",
      //   actualhours: "300",
      //   remaininghours: "0",
      //   complete: "100.00%",
      //   public: publicSwitch("11222"),
      //   status: "Completed",
      //   chargeable: "Yes",
      //   billable: "Yes",
      //   description: "Admin",
      //   activities: [
      //     {
      //       type: "activity",
      //       wbsNumber: "a1.01.01",
      //       name: "Team Managemnet",
      //       duration: "10",
      //       start_date: "01-01-2019",
      //       end_date: "01-11-2019",
      //       resources: "SP",
      //       estimatehours: "40",
      //       actualhours: "40",
      //       remaininghours: "0",
      //       complete: "100.00%",
      //       public: publicSwitch("11333", true)
      //     },
      //     {
      //       type: "activity",
      //       wbsNumber: "a1.01.02",
      //       name: "Contract Mangemnet",
      //       duration: "49",
      //       start_date: "01-12-2019",
      //       end_date: "03-02-2019",
      //       resources: "SP",
      //       estimatehours: "260",
      //       actualhours: "260",
      //       remaininghours: "0",
      //       complete: "100.00%",
      //       public: publicSwitch("11444")
      //     }
      //   ],
      //   record_information: {
      //     schedule_info: [
      //       {
      //         title: "Schedule Start Date",
      //         value: "01-01-19"
      //       },
      //       {
      //         title: "Schedule End Date",
      //         value: "03-02-19"
      //       },
      //       {
      //         title: "Transaction Start Date",
      //         value: "01-01-19"
      //       },
      //       {
      //         title: "Transaction End Date",
      //         value: "03-02-19"
      //       },
      //       {
      //         title: "Planned Efforts",
      //         value: "300 Hours"
      //       },
      //       {
      //         title: "Actual Efforts",
      //         value: "300 Hours"
      //       },
      //       {
      //         title: "% Spent",
      //         value: "0%"
      //       },
      //       {
      //         title: "% Complete",
      //         value: "100%"
      //       }
      //     ],
      //     audit_info: [
      //       {
      //         title: "Created By",
      //         value: "Suresh Padmanabhan"
      //       },
      //       {
      //         title: "Creation Date",
      //         value: "12-15-18"
      //       },
      //       {
      //         title: "Last Updated By",
      //         value: "Suresh Padmanabhan"
      //       },
      //       {
      //         title: "Last Updated Date",
      //         value: "06-10-19"
      //       },
      //       {
      //         title: "Latest Activity date",
      //         value: "06-08-19"
      //       },
      //       {
      //         title: "Locked By",
      //         value: "Suresh Padmanabhan"
      //       }
      //     ]
      //   }
      // },
      {
        "page": "projectwiki",
        "projectId":"60453005",
        id: "f943d9a6-5fe9-4c97-957d-16d3f8af117d",
        deliverable: "1",
        issues: "0",
        changes: "1",
        type: "WorkPackage",
        wbsType: "Design",
        wbsNumber: "1.02",
        name: (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "f943d9a6-5fe9-4c97-957d-16d3f8af117d"
            }
          >
            Design
          </Link>
        ),
        duration: "70",
        start_date: "01-01-2019",
        end_date: "04-06-2019",
        resources: "SP,AM,NG",
        estimatehours: "548",
        actualhours: "548",
        remaininghours: "0",
        complete: "80%",
        public: publicSwitch("11555", true),
        status: "In Progress",
        chargeable: "Yes",
        billable: "Yes",
        description: "Design",
        activities: [
          {
            type: "activity",
            wbsNumber: "a1.02.01",
            name: "prelim design",
            duration: "60",
            start_date: "01-01-2019",
            end_date: "03-02-2019",
            resources: "AM",
            estimatehours: "300",
            actualhours: "300",
            remaininghours: "0",
            complete: "100.00%",
            public: publicSwitch("11666")
          },
          {
            type: "activity",
            wbsNumber: "a1.02.02",
            name: "tender design",
            duration: "1",
            start_date: "03-03-2019",
            end_date: "03-04-2019",
            resources: "NG",
            estimatehours: "8",
            actualhours: "8",
            remaininghours: "0",
            complete: "100.00%",
            public: publicSwitch("11777")
          },
          {
            type: "activity",
            wbsNumber: "a1.02.03",
            name: "final design",
            duration: "10",
            start_date: "03-05-2019",
            end_date: "03-15-2019",
            resources: "SP",
            estimatehours: "80",
            actualhours: "80",
            remaininghours: "0",
            complete: "100.00%",
            public: publicSwitch("11888")
          },
          {
            type: "activity",
            wbsNumber: "a1.02.04",
            name: "design maintenance",
            duration: "10",
            start_date: "03-16-2019",
            end_date: "03-26-2019",
            resources: "SP",
            estimatehours: "80",
            actualhours: "80",
            remaininghours: "0",
            complete: "100.00%",
            public: publicSwitch("11999")
          },
          {
            type: "activity",
            wbsNumber: "d1.02.05",
            name: "deliv-design as-built",
            duration: "10",
            start_date: "03-27-2019",
            end_date: "04-06-2019",
            resources: "NG",
            estimatehours: "80",
            actualhours: "80",
            remaininghours: "0",
            complete: "100.00%",
            public: publicSwitch("12110")
          }
        ],
        record_information: {
          schedule_info: [
            {
              title: "Schedule Start Date",
              value: "01-01-19"
            },
            {
              title: "Schedule End Date",
              value: "04-06-19"
            },
            {
              title: "Transaction Start Date",
              value: "01-01-19"
            },
            {
              title: "Transaction End Date",
              value: "04-06-19"
            },

            {
              title: "Planned Efforts",
              value: "548 Hours"
            },
            {
              title: "Actual Efforts",
              value: "548 Hours"
            },
            {
              title: "% Spent",
              value: "0%"
            },
            {
              title: "% Complete",
              value: "80%"
            }
          ],
          audit_info: [
            {
              title: "Created By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Creation Date",
              value: "12-15-18"
            },
            {
              title: "Last Updated By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Last Updated Date",
              value: "06-10-19"
            },
            {
              title: "Latest Activity date",
              value: "06-08-19"
            },
            {
              title: "Locked By",
              value: "Suresh Padmanabhan"
            }
          ]
        }
      },
      {
        "page": "projectwiki",
        "projectId":"60453005",
        id: "cab9c763-517c-41ac-829d-6f961d8b67c4",
        deliverable: "1",
        issues: "0",
        changes: "1",
        type: "WorkPackage",
        wbsType: "Modelling",
        wbsNumber: "1.03",
        name: (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "cab9c763-517c-41ac-829d-6f961d8b67c4"
            }
          >
            Modelling
          </Link>
        ),
        duration: "269",
        start_date: "04-06-2019",
        end_date: "12-31-2019",
        resources: "SP, AM",
        estimatehours: "968",
        actualhours: "200",
        remaininghours: "768",
        complete: "80%",
        status: "In Progress",
        chargeable: "Yes",
        billable: "Yes",
        public: publicSwitch("12221"),
        description: "Modelling",
        activities: [
          {
            type: "activity",
            wbsNumber: "a1.03.01",
            name: "prelim model",
            duration: "60",
            start_date: "04-10-2019",
            end_date: "06-09-2019",
            resources: "SP",
            estimatehours: "240",
            actualhours: "200",
            remaininghours: "40",
            complete: "83.33%",
            public: publicSwitch("12332")
          },
          {
            type: "activity",
            wbsNumber: "a1.03.02",
            name: "tender model",
            duration: "1",
            start_date: "06-10-2019",
            end_date: "06-11-2019",
            resources: "SP",
            estimatehours: "8",
            actualhours: "0",
            remaininghours: "8",
            complete: "0.00%",
            public: publicSwitch("12443")
          },
          {
            type: "activity",
            wbsNumber: "a1.03.03",
            name: "final model",
            duration: "30",
            start_date: "06-12-2019",
            end_date: "07-12-2019",
            resources: "AM",
            estimatehours: "240",
            actualhours: "0",
            remaininghours: "240",
            complete: "0.00%",
            public: publicSwitch("12554")
          },
          {
            type: "activity",
            wbsNumber: "a1.03.04",
            name: "model maintenance",
            duration: "30",
            start_date: "07-13-2019",
            end_date: "08-12-2019",
            resources: "AM",
            estimatehours: "240",
            actualhours: "0",
            remaininghours: "240",
            complete: "0.00%",
            public: publicSwitch("12665")
          },
          {
            type: "activity",
            wbsNumber: "d1.03.05",
            name: "deliv-model as-built",
            duration: "30",
            start_date: "08-13-2019",
            end_date: "09-12-2019",
            resources: "AM",
            estimatehours: "240",
            actualhours: "0",
            remaininghours: "240",
            complete: "0.00%",
            public: publicSwitch("12776")
          }
        ],
        record_information: {
          schedule_info: [
            {
              title: "Schedule Start Date",
              value: "04-06-2019"
            },
            {
              title: "Schedule End Date",
              value: "12-31-2019"
            },
            {
              title: "Transaction Start Date",
              value: "04-06-2019"
            },
            {
              title: "Transaction End Date",
              value: "12-31-2019"
            },

            {
              title: "Planned Efforts",
              value: "968 Hours"
            },
            {
              title: "Actual Efforts",
              value: "200 Hours"
            },
            {
              title: "% Spent",
              value: "0%"
            },
            {
              title: "% Complete",
              value: "80%"
            }
          ],
          audit_info: [
            {
              title: "Created By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Creation Date",
              value: "12-15-18"
            },
            {
              title: "Last Updated By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Last Updated Date",
              value: "06-10-19"
            },
            {
              title: "Latest Activity date",
              value: "06-08-19"
            },
            {
              title: "Locked By",
              value: "Suresh Padmanabhan"
            }
          ]
        }
      },
      {
        "page": "projectwiki",
        "projectId":"60453005",
        id: "e19f1bfa-af5d-4e40-8488-9183f7a3dbfb",
        deliverable: "1",
        issues: "0",
        changes: "1",
        type: "WorkPackage",
        wbsType: "Rebar",
        wbsNumber: "1.04",
        name: (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "e19f1bfa-af5d-4e40-8488-9183f7a3dbfb"
            }
          >
            Rebar
          </Link>
        ),
        duration: "156",
        start_date: "09-13-2019",
        end_date: "02-16-2020",
        resources: "AM,NG",
        estimatehours: "888",
        actualhours: "0",
        remaininghours: "888",
        complete: "0.00%",
        public: publicSwitch("12887"),
        chargeable: "Yes",
        billable: "Yes",
        status: "Not Started",
        description: "Rebar",
        activities: [
          {
            type: "activity",
            wbsNumber: "a1.04.01",
            name: "found rebar",
            duration: "30",
            start_date: "09-13-2019",
            end_date: "10-13-2019",
            resources: "AM",
            estimatehours: "200",
            actualhours: "0",
            remaininghours: "200",
            complete: "0.00%",
            public: publicSwitch("12998")
          },
          {
            type: "activity",
            wbsNumber: "a1.04.02",
            name: "col found rebar",
            duration: "1",
            start_date: "10-14-2019",
            end_date: "10-15-2019",
            resources: "AM",
            estimatehours: "8",
            actualhours: "0",
            remaininghours: "8",
            complete: "0.00%",
            public: publicSwitch("13109")
          },
          {
            type: "activity",
            wbsNumber: "a1.04.03",
            name: "1st rebar",
            duration: "30",
            start_date: "10-16-2019",
            end_date: "11-15-2019",
            resources: "AM",
            estimatehours: "160",
            actualhours: "0",
            remaininghours: "160",
            complete: "0.00%",
            public: publicSwitch("13220")
          },
          {
            type: "activity",
            wbsNumber: "a1.04.04",
            name: "1st to roof beam",
            duration: "30",
            start_date: "11-16-2019",
            end_date: "12-16-2019",
            resources: "NG",
            estimatehours: "160",
            actualhours: "0",
            remaininghours: "160",
            complete: "0.00%",
            public: publicSwitch("13331")
          },
          {
            type: "activity",
            wbsNumber: "a1.04.05",
            name: "roof beams",
            duration: "30",
            start_date: "12-17-2019",
            end_date: "01-01-2020",
            resources: "NG",
            estimatehours: "160",
            actualhours: "0",
            remaininghours: "160",
            complete: "0.00%",
            public: publicSwitch("13442")
          },
          {
            type: "activity",
            wbsNumber: "a1.04.06",
            name: "staircase and other",
            duration: "30",
            start_date: "01-01-2020",
            end_date: "02-16-2020",
            resources: "NG",
            estimatehours: "200",
            actualhours: "0",
            remaininghours: "200",
            complete: "0.00%",
            public: publicSwitch("13553")
          }
        ],
        record_information: {
          schedule_info: [
            {
              title: "Schedule Start Date",
              value: "09-13-19"
            },
            {
              title: "Schedule End Date",
              value: "02-16-20"
            },
            {
              title: "Transaction Start Date",
              value: "09-13-19"
            },
            {
              title: "Transaction End Date",
              value: "02-16-20"
            },
            {
              title: "Planned Efforts",
              value: "888 Hours"
            },
            {
              title: "Actual Efforts",
              value: "0 Hours"
            },
            {
              title: "% Spent",
              value: "0%"
            },
            {
              title: "% Complete",
              value: "0%"
            }
          ],
          audit_info: [
            {
              title: "Created By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Creation Date",
              value: "12-15-18"
            },
            {
              title: "Last Updated By",
              value: "Suresh Padmanabhan"
            },
            {
              title: "Last Updated Date",
              value: "06-10-19"
            },
            {
              title: "Latest Activity date",
              value: "06-08-19"
            },
            {
              title: "Locked By",
              value: "Suresh Padmanabhan"
            }
          ]
        }
      },

    // WorkPackage From DashBoard
      {
        "page":"dashboard",
        "id": "558cf6ed-c85a-482d-b900-5ae6b892d7bf",
        "projectId":"60453005",
        "wbsNumber" : "1.02",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "558cf6ed-c85a-482d-b900-5ae6b892d7bf"
            }
          > DESIGN </Link>),
        "duration" : "70",
        "start_date" : "01-01-2019",
        "end_date" : "04-06-2019",
        "resources" : "SP,AM,NG",
        "estimatehours" : "548",
        "actualhours" : "548",
        "remaininghours" : "1",
        "description" : "DESIGN",
        "status" : "Overdue",
        "deliverable" : "1",
        "issues" : "",
        "changes" : "1",
        "complete" : "100%",
        "public" :publicSwitch("92335"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-2019"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "100%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "701add2a-3660-49d7-a2bd-63f8e65a739a"  ,
          "projectId":"60453005",
        "wbsNumber" : "1.03",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "701add2a-3660-49d7-a2bd-63f8e65a739a"
            }
          > MODELLING </Link>),
        "duration" : "269",
        "start_date" : "04-06-2019",
        "end_date" : "12-31-2019",
        "resources" : "SP, AM",
        "estimatehours" : "968",
        "actualhours" : "200",
        "remaininghours" : "768",
        "description" : "MODELLING",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "20.66%",
        "public" :publicSwitch("89445"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "12-31-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-19"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "12-31-2019"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "968 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "200 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "20.66%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "05b707bd-fad8-4d28-b036-fe4a873da280"  ,
          "projectId":"60453007",
        "wbsNumber" : "DES1.0",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "05b707bd-fad8-4d28-b036-fe4a873da280"
            }
          > DESIGN </Link>),
        "duration" : "70",
        "start_date" : "01-01-2019",
        "end_date" : "04-06-2019",
        "resources" : "SP,AM,NG",
        "estimatehours" : "548",
        "actualhours" : "548",
        "remaininghours" : "1",
        "description" : "DESIGN",
        "status" : "Overdue",
        "deliverable" : "1",
        "issues" : "",
        "changes" : "1",
        "complete" : "100%",
        "public" :publicSwitch("7973"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-2019"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "100%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "e48d9e97-7551-4786-87a8-7f3976036750"  ,
          "projectId":"60453007",
        "wbsNumber" : "MOD1.0",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "e48d9e97-7551-4786-87a8-7f3976036750"
            }
          > MODELLING </Link>),
        "duration" : "269",
        "start_date" : "04-06-2019",
        "end_date" : "12-31-2019",
        "resources" : "SP, AM",
        "estimatehours" : "968",
        "actualhours" : "200",
        "remaininghours" : "768",
        "description" : "MODELLING",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "20.66%",
        "public" :publicSwitch("87848"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "12-31-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "12-31-2019"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "968 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "200 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "20.66%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "b34fd0e3-c42a-403f-b9e4-d9a572b171e3"  ,
          "projectId":"60453009",
        "wbsNumber" : "1.01.01",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "b34fd0e3-c42a-403f-b9e4-d9a572b171e3"
            }
          > REBAR </Link>),
        "duration" : "156",
        "start_date" : "01-01-2019",
        "end_date" : "02-16-2020",
        "resources" : "AM,NG",
        "estimatehours" : "888",
        "actualhours" : "0",
        "remaininghours" : "888",
        "description" : "REBAR",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "0%",
        "public" :publicSwitch("80295"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "02-16-2020"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-2019"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "02-16-2020"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "888 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "0 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "0%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "107995bf-7187-4a11-a7b6-6ce254a2099e"  ,
          "projectId":"60453010",
        "wbsNumber" : "T1",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "107995bf-7187-4a11-a7b6-6ce254a2099e"
            }
          > DESIGN </Link>),
        "duration" : "70",
        "start_date" : "01-10-2019",
        "end_date" : "04-06-2019",
        "resources" : "SP,AM,NG",
        "estimatehours" : "548",
        "actualhours" : "548",
        "remaininghours" : "0",
        "description" : "DESIGN",
        "status" : "Overdue",
        "deliverable" : "1",
        "issues" : "",
        "changes" : "1",
        "complete" : "100%",
        "public" :publicSwitch("4260"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "01-10-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "04-06-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-10-2019"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-19"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "548 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "100%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "232a8482-e994-4b1a-a970-42a995468589"  ,
          "projectId":"60453013",
        "wbsNumber" : "T1.03",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "232a8482-e994-4b1a-a970-42a995468589"
            }
          > MODELLING </Link>),
        "duration" : "269",
        "start_date" : "04-10-2019",
        "end_date" : "12-31-2019",
        "resources" : "SP, AM",
        "estimatehours" : "968",
        "actualhours" : "200",
        "remaininghours" : "768",
        "description" : "MODELLING",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "20.66%",
        "public" :publicSwitch("29673"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "04-10-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "12-31-2019"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-19"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-19"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "968 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "200 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "20.66%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "72ca6fe9-357a-4862-bd07-8f97d1ace79f"  ,
          "projectId":"60453013",
        "wbsNumber" : "T1.04",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "72ca6fe9-357a-4862-bd07-8f97d1ace79f"
            }
          > REBAR </Link>),
        "duration" : "156",
        "start_date" : "06-20-2019",
        "end_date" : "02-16-2020",
        "resources" : "AM,NG",
        "estimatehours" : "888",
        "actualhours" : "0",
        "remaininghours" : "888",
        "description" : "REBAR",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "0%",
        "public" :publicSwitch("48246"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "06-20-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "02-16-2020"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-19"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-19"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "888 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "0 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "0%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },{
          "page":"dashboard",
          "id": "da637e10-f1bd-4855-9d75-14d11281dba6"  ,
          "projectId":"60453013",
        "wbsNumber" : "T1.05",
        "name": (
          <Link
            className="text-primary"
            to={
              routesURL.WORKPACKAGE_WIKI +
              "da637e10-f1bd-4855-9d75-14d11281dba6"
            }
          > PLUMBING </Link>),
        "duration" : "200",
        "start_date" : "06-20-2019",
        "end_date" : "01-06-2020",
        "resources" : "AM,NG",
        "estimatehours" : "888",
        "actualhours" : "0",
        "remaininghours" : "888",
        "description" : "PLUMBING",
        "status" : "In Progress",
        "deliverable" : "",
        "issues" : "",
        "changes" : "",
        "complete" : "0%",
        "public" :publicSwitch("69669"),
        "chargeable": "Yes",
        "billable": "Yes",
        "activities": [],
        "record_information": {
                  "schedule_info": [
                    {
                      "title": "Schedule Start Date",
                      "value": "06-20-2019"
                    },
                    {
                      "title": "Schedule End Date",
                      "value": "01-06-2020"
                    },
                    {
                      "title": "Transaction Start Date",
                      "value": "01-01-19"
                    },
                    {
                      "title": "Transaction End Date",
                      "value": "04-06-19"
                    },

                    {
                      "title": "Planned Efforts",
                      "value": "888 Hours"
                    },
                    {
                      "title": "Actual Efforts",
                      "value": "0 Hours"
                    },
                    {
                      "title": "% Spent",
                      "value": "0%"
                    },
                    {
                      "title": "% Complete",
                      "value": "0%"
                    }
                  ],
                  "audit_info": [
                    {
                      "title": "Created By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Creation Date",
                      "value": "12-15-18"
                    },
                    {
                      "title": "Last Updated By",
                      "value": "Suresh Padmanabhan"
                    },
                    {
                      "title": "Last Updated Date",
                      "value": "06-10-19"
                    },
                    {
                      "title": "Latest Activity date",
                      "value": "06-08-19"
                    },
                    {
                      "title": "Locked By",
                      "value": "Suresh Padmanabhan"
                    }
                  ]
                }
        },
        //==================WorkPackage For PSR========================

        {
          "page": "psr",
          "projectId":"60453005",
          id: "a86e2288-ac1d-45bd-9b2d-9eec4062e40e",
          deliverable: "1",
          issues: "0",
          changes: "1",
          type: "WorkPackage",
          wbsType: "Design",
          wbsNumber: "1.02",
          name: (
            <Link
              className="text-primary"
              to={
                routesURL.WORKPACKAGE_WIKI +
                "a86e2288-ac1d-45bd-9b2d-9eec4062e40e"
              }
            >
              Design
            </Link>
          ),
          duration: "70",
          start_date: "01-01-2019",
          end_date: "04-06-2019",
          resources: "SP,AM,NG",
          estimatehours: "548",
          actualhours: "548",
          remaininghours: "0",
          complete: "80%",
          public: publicSwitch("11654654654555", true),
          status: "Overdue",
          chargeable: "Yes",
          billable: "Yes",
          description: "Design",
          activities: [],
          record_information: {
            schedule_info: [
              {
                title: "Schedule Start Date",
                value: "01-01-19"
              },
              {
                title: "Schedule End Date",
                value: "04-06-19"
              },
              {
                title: "Transaction Start Date",
                value: "01-01-19"
              },
              {
                title: "Transaction End Date",
                value: "04-06-19"
              },

              {
                title: "Planned Efforts",
                value: "548 Hours"
              },
              {
                title: "Actual Efforts",
                value: "548 Hours"
              },
              {
                title: "% Spent",
                value: "0%"
              },
              {
                title: "% Complete",
                value: "80%"
              }
            ],
            audit_info: [
              {
                title: "Created By",
                value: "Suresh Padmanabhan"
              },
              {
                title: "Creation Date",
                value: "12-15-18"
              },
              {
                title: "Last Updated By",
                value: "Suresh Padmanabhan"
              },
              {
                title: "Last Updated Date",
                value: "06-10-19"
              },
              {
                title: "Latest Activity date",
                value: "06-08-19"
              },
              {
                title: "Locked By",
                value: "Suresh Padmanabhan"
              }
            ]
          }
        },
        {
          "page": "psr",
          "projectId":"60453005",
          id: "6e4d2f95-bd5f-47f4-85c8-75e63af13e73",
          deliverable: "1",
          issues: "0",
          changes: "1",
          type: "WorkPackage",
          wbsType: "Modelling",
          wbsNumber: "1.03",
          name: (
            <Link
              className="text-primary"
              to={
                routesURL.WORKPACKAGE_WIKI +
                "6e4d2f95-bd5f-47f4-85c8-75e63af13e73"
              }
            >
              Modelling
            </Link>
          ),
          duration: "269",
          start_date: "04-06-2019",
          end_date: "12-31-2019",
          resources: "SP, AM",
          estimatehours: "968",
          actualhours: "200",
          remaininghours: "768",
          complete: "80%",
          status: "In Progress",
          chargeable: "Yes",
          billable: "Yes",
          public: publicSwitch("987987"),
          description: "Modelling",
          activities: [],
          record_information: {
            schedule_info: [
              {
                title: "Schedule Start Date",
                value: "04-06-2019"
              },
              {
                title: "Schedule End Date",
                value: "12-31-2019"
              },
              {
                title: "Transaction Start Date",
                value: "04-06-2019"
              },
              {
                title: "Transaction End Date",
                value: "12-31-2019"
              },

              {
                title: "Planned Efforts",
                value: "968 Hours"
              },
              {
                title: "Actual Efforts",
                value: "200 Hours"
              },
              {
                title: "% Spent",
                value: "0%"
              },
              {
                title: "% Complete",
                value: "80%"
              }
            ],
            audit_info: [
              {
                title: "Created By",
                value: "Suresh Padmanabhan"
              },
              {
                title: "Creation Date",
                value: "12-15-18"
              },
              {
                title: "Last Updated By",
                value: "Suresh Padmanabhan"
              },
              {
                title: "Last Updated Date",
                value: "06-10-19"
              },
              {
                title: "Latest Activity date",
                value: "06-08-19"
              },
              {
                title: "Locked By",
                value: "Suresh Padmanabhan"
              }
            ]
          }
        }
    ]
  }
];

export default database;
