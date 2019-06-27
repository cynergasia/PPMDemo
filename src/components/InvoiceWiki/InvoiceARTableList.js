import React from "react";
import { Table } from "reactstrap";

const InvoiceARTableList = props => {
  return (
    <React.Fragment>
      <Table responsive>
        <tr>
          <td className="basicinfo text-left">
            <div>Current</div>
          </td>
          <td className="text-left">
            <div> </div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>1-30 Days </div>
          </td>
          <td className="text-left">
            <div>20,000</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>31-60 Days</div>
          </td>
          <td className="text-left">
            <div>20,000</div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>61-90 Days</div>
          </td>
          <td className="text-left">
            <div></div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>91-180 Days</div>
          </td>
          <td className="text-left">
            <div></div>
          </td>
        </tr>
        <tr>
          <td className="basicinfo text-left">
            <div>{">180 Days"}</div>
          </td>
          <td className="text-left">
            <div></div>
          </td>
        </tr>
      </Table>
    </React.Fragment>
  );
};

export default InvoiceARTableList;
