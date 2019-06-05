import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { hashHistory,Redirect } from 'react-router-dom'

class Notification extends Component {
  handleClick = (id) => {
    window.location.hash = "/500"
  }
  
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Notification
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <Table hover responsive className="table-outline mb-0 d-sm-table">
              <thead className="thead-light">
                {/* <tr>
                        <td colspan="3" className="text-center" style={{ background: "#ccecff", fontWeight: 600 }}>Notificaitons</td>
                      </tr> */}
                <tr>
                  <th className="text-center">Due Date V</th>
                  <th className="text-center">Project</th>
                  <th className="text-center">Notification</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 4</div>
                  </td>
                  <td className="text-center">
                    <div>Invoice Approval Pending</div>
                  </td>
                </tr>

                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 5</div>
                  </td>
                  <td className="text-center">
                    <div>Status Report Pending</div>
                  </td>
                </tr>
                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 6</div>
                  </td>
                  <td className="text-center">
                    <div>Issue Review pending</div>
                  </td>
                </tr>
                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 6</div>
                  </td>
                  <td className="text-center">
                    <div>Issue Review pending</div>
                  </td>
                </tr>
                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 6</div>
                  </td>
                  <td className="text-center">
                    <div>Issue Review pending</div>
                  </td>
                </tr>
                <tr onClick={() => this.handleClick("1")}>
                  <td className="text-center">
                    <div>4/22/2019</div>
                  </td>
                  <td className="text-center">
                    <div>Project 6</div>
                  </td>
                  <td className="text-center">
                    <div>Issue Review pending</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Notification;
