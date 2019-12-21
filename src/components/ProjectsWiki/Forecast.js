import React, { Component } from "react";
import { Table } from "reactstrap";

class Forecast extends Component {
  render() {
    return (
      <React.Fragment>
        <Table responsive bordered>
          <tr>
            <td rowSpan="2">
              {/* <a
                className="text-danger font-weight-bold"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1FSLJbvp1EMw5SDxtkvRgu8QUK-dSp9qf/view?ts=5d145159"
              >
                Download Forecast.xls
              </a> */}
            </td>
            <td className="basicinfo text-center" colSpan="3">
              <div>Cost </div>
            </td>
            <td className="basicinfo text-center" colSpan="3">
              <div>Revenue </div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>Actual</div>
            </td>
            <td className="basicinfo text-left">
              <div>ETC</div>
            </td>
            <td className="basicinfo text-left">
              <div>Forecast</div>
            </td>
            <td className="basicinfo text-left">
              <div>Actual</div>
            </td>
            <td className="basicinfo text-left">
              <div>ETC</div>
            </td>
            <td className="basicinfo text-left">
              <div>Forecast</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>Current Working</div>
            </td>
            <td className="text-left">
              <div>3,000.00</div>
            </td>
            <td className="text-left">
              <div>17,000.00</div>
            </td>
            <td className="text-left">
              <div>20,000.00</div>
            </td>
            <td className="text-left">
              <div>4,000.00</div>
            </td>
            <td className="text-left">
              <div>17,000.00</div>
            </td>
            <td className="text-left">
              <div>21,000.00</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>Current Approved</div>
            </td>
            <td className="text-left">
              <div>2,000.00</div>
            </td>
            <td className="text-left">
              <div>16,000.00</div>
            </td>
            <td className="text-left">
              <div>18,000.00</div>
            </td>
            <td className="text-left">
              <div>3,000.00</div>
            </td>
            <td className="text-left">
              <div>5,000.00</div>
            </td>
            <td className="text-left">
              <div>8,000.00</div>
            </td>
          </tr>
          <tr>
            <td className="basicinfo text-left">
              <div>As Sold</div>
            </td>
            <td className="text-left">
              <div />
            </td>
            <td className="text-left">
              <div />
            </td>
            <td className="text-left">
              <div>15,000.00</div>
            </td>
            <td className="text-left">
              <div />
            </td>
            <td className="text-left">
              <div />
            </td>
            <td className="text-left">
              <div>15,000.00</div>
            </td>
          </tr>
        </Table>
      </React.Fragment>
    );
  }
}

export default Forecast;
