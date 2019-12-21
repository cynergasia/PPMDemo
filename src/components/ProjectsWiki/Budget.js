import React, { Component } from "react";
import { Table } from "reactstrap";

class Budget extends Component {
  render() {
    return (
      <React.Fragment>
        <Table responsive bordered>
          <tr>
            <td>
              {/* <a
                className="text-danger font-weight-bold"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1FSLJbvp1EMw5SDxtkvRgu8QUK-dSp9qf/view?ts=5d145159"
              >
                Download Budget.xls
              </a> */}
            </td>
            <td className="basicinfo text-left">
              <div>Cost </div>
            </td>
            <td className="basicinfo text-left">
              <div>Revenue </div>
            </td>
            <td className="basicinfo text-left">
              <div>Margin </div>
            </td>
            <td className="basicinfo text-left">
              <div>Margin%</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>Current Working</div>
            </td>
            <td className="text-left">
              <div>20,000.00</div>
            </td>
            <td className="text-left">
              <div>22,000.00</div>
            </td>
            <td className="text-left">
              <div>2,000.00</div>
            </td>
            <td className="text-left">
              <div>9%</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>Current Approved</div>
            </td>
            <td className="text-left">
              <div>18,000.00</div>
            </td>
            <td className="text-left">
              <div>19,000.00</div>
            </td>
            <td className="text-left">
              <div>1,000.00</div>
            </td>
            <td className="text-left">
              <div>5%</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>As Sold</div>
            </td>
            <td className="text-left">
              <div>15,000.00</div>
            </td>
            <td className="text-left">
              <div>18,000.00</div>
            </td>
            <td className="text-left">
              <div>3,000.00</div>
            </td>
            <td className="text-left">
              <div>17%</div>
            </td>
          </tr>
        </Table>
      </React.Fragment>
    );
  }
}

export default Budget;
