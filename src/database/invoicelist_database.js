/* eslint-disable no-unused-vars */
import React from "react";
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
  invoiceList: [
    {
      invoice_number: (
        <a href="#/invoicewiki" className="text-primary">
          1004
        </a>
      ),
      customer: "SHELL",
      currency: "USD",
      amount: "20,000.00",
      date: "01-May-19",
      status: "Unapproved",
      payment_terms: "NET 60",
      due_date: "30-Jun-19",
      payment_date: "",
      payment: "",
      type: "Draft Invoice",
      comments: "SP To review",
      public: publicSwitch("81312")
    },
    {
      invoice_number: (
        <a href="#/invoicewiki" className="text-primary">
          1003
        </a>
      ),
      customer: "SHELL",
      currency: "USD",
      amount: "20,000.00",
      date: "15-Mar-19",
      status: "Pending Payment",
      payment_terms: "NET 60",
      due_date: "14-May-19",
      payment_date: "",
      payment: "",
      type: "Invoice",
      comments: "",
      public: publicSwitch("50052", true)
    },
    {
      invoice_number: (
        <a href="#/invoicewiki" className="text-primary">
          1002
        </a>
      ),
      customer: "SHELL",
      currency: "USD",
      amount: "10,000.00",
      date: "15-Jan-19",
      status: "Paid",
      payment_terms: "NET 60",
      due_date: "16-Mar-19",
      payment_date: "10-Mar-19",
      payment: "10,000.00",
      type: "Invoice",
      comments: "",
      public: publicSwitch("32744")
    },
    {
      invoice_number: (
        <a href="#/invoicewiki" className="text-primary">
          1006
        </a>
      ),
      customer: "SHELL",
      currency: "USD",
      amount: "10,000.00",
      date: "15-Dec-18",
      status: "Paid",
      payment_terms: "NET 60",
      due_date: "13-Feb-19",
      payment_date: "16-Feb-19",
      payment: "10,000.00",
      type: "Invoice",
      comments: "",
      public: publicSwitch("54107")
    }
  ],
  invoiceDetails: [
    {
      Details: "Week Ending 30-Apr-19 - Suresh Padmanabhan",
      Hours: "15",
      Rate: "200",
      Amount: "$ 3,000.00"
    },
    {
      Details: "Week Ending 30-Apr-19 - Arindam Mukherjee",
      Hours: "25",
      Rate: "200",
      Amount: "$ 5,000.00"
    },
    {
      Details: "Suresh Padmanabhan Expenses",
      Hours: "",
      Rate: "",
      Amount: " "
    },
    {
      Details: "Airfare SEA-LAX-SEA",
      Hours: "",
      Rate: "",
      Amount: "1,000.00"
    },
    {
      Details: "Loding LA Downtown",
      Hours: "",
      Rate: "",
      Amount: "1,000.00"
    }
  ],
  invoiceActivites: [
    {
      description: "Generate Invoice",
      assigned_to: "Suresh Padmanabhan",
      start_date: "04-30-2019",
      due_date: "05-01-2019",
      status: "Complete",
      per_complete: "100"
    },
    {
      description: "Finalize Invoice",
      assigned_to: "Suresh Padmanabhan",
      start_date: "05-02-2019",
      due_date: "05-04-2019",
      status: "Complete",
      per_complete: "100"
    },
    {
      description: "Approve Invoice",
      assigned_to: "Arindam Mukherjee",
      start_date: "05-06-2019",
      due_date: "05-10-2019",
      status: "In Progress",
      per_complete: "0"
    },
    {
      description: "Send Invoice to Customer",
      assigned_to: "Suresh Padmanabhan",
      start_date: "05-15-2019",
      due_date: "05-11-2019",
      status: " ",
      per_complete: "0"
    }
  ],
  record_information: {
    audit_info: [
      {
        title: "Created By",
        value: "Suresh Padmanabhan"
      },
      {
        title: "Creation Date",
        value: "05-01-19"
      },
      {
        title: "Assigned To",
        value: "Arindam Mukherjee"
      },
      {
        title: "Type",
        value: "Draft Invoice"
      },
      {
        title: "Last Updated By",
        value: "Suresh Padmanabhan"
      },
      {
        title: "Last Updated Date",
        value: "05-15-19"
      }
    ]
  }
});

export default data;
