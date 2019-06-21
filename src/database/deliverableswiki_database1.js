import React from "react";

const data = props => ({
  activities: [
    {
      description: "NULL",
      assigned_to: "NULL",
      start_date: "NULL",
      due_date: "NULL",
      status: "NULL",
      per_complete: "NULL"
    }
  ],
  activityLog: [
    {
      date: "06-13-19 8:15 PM",
      by: "Neeraj Garg",
      comment: "Digital and Printed Draft Exhibit for Potential Conversion"
    },
    {
      date: "06-13-19 8:14 PM",
      by: "Arindam Mukherjee",
      comment: "Digital and Printed Draft of cart path modifications"
    }
  ],
  deliverablesList: [
    {
      deliverable_name: (
        <a href="#/404" className="text-primary">
          Design Documen1
        </a>
      ),
      workpackage: (
        <a href="#/404" className="text-primary">
          WP01
        </a>
      ),
      type: "Document",
      owner: (
        <a href="#/404" className="text-primary">
          Arindam
        </a>
      ),
      due_date: "01-03-20",
      status: "Transmitted",
      // (
      //   <select
      //     name="status"
      //     className="custom-select custom-select-sm"
      //     defaultValue="closed"
      //     onChange={({ target: { name, value } }) =>
      //       props.handleChange(name, { id: "3as2d1f65asd4f", value })
      //     }
      //   >
      //     <option value="transmitted">Transmitted</option>
      //     <option value="not_started">Not Started</option>
      //     <option value="in_progress">In Progress</option>
      //     <option value="submitted">Submitted</option>
      //     <option value="closed">Closed</option>
      //   </select>
      // ),
      completion_date: "NULL",
      progress: "NULL",
      comments: "NULL",
      public: "Y"
    },
    {
      deliverable_name: (
        <a href="#/404" className="text-primary">
          Design Document
        </a>
      ),
      workpackage: (
        <a href="#/404" className="text-primary">
          WP02
        </a>
      ),
      type: "Document",
      owner: (
        <a href="#/404" className="text-primary">
          SD
        </a>
      ),
      due_date: "01-03-20",
      status: "Closed",
      // (
      //   <select
      //     name="status"
      //     className="custom-select custom-select-sm"
      //     defaultValue="transmitted"
      //     onChange={({ target: { name, value } }) =>
      //       props.handleChange(name, { id: "3as2d1f65", value })
      //     }
      //   >
      //     <option value="transmitted">Transmitted</option>
      //     <option value="not_started">Not Started</option>
      //     <option value="in_progress">In Progress</option>
      //     <option value="submitted">Submitted</option>
      //     <option value="closed">Closed</option>
      //   </select>
      // ),
      completion_date: "NULL",
      progress: "NULL",
      comments: "NULL",
      public: "Y"
    }
  ]
});

export default data;
