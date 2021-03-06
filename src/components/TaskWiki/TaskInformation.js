import React, { Component } from "react";
import { Card, CardHeader, CardBody,Table,Input } from "reactstrap";

class TaskInformation extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Task Information
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>          
            <Table responsive bordered>
              <tbody>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Number </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Name </div>
                  </td>
                  <td className="text-left">
                    <div> </div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Schedule Start Date </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Schedule End Date </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Transaction Start Date </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Transaction End Date </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Number of Days</div>
                  </td>
                  <td className="text-left">
                    <div> </div>
                  </td>
                  <td className="basicinfo text-left" rowSpan="4">
                    <div>Status</div>
                  </td>
                  <td className="text-left" rowSpan="4">
                    <div></div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Chargeable </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Billable </div>
                  </td>
                  <td className="text-left">
                    <div> </div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Estimate Effort </div>
                  </td>
                  <td className="text-left">
                    <div></div>
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Description</td>
                  <td colSpan="3">
                    <Input
                      type="textarea"
                      rows="2"
                      
                    />
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Location</td>
                  <td colSpan="3">
                    <Input type="textarea" rows="2"  />
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

export default TaskInformation;

