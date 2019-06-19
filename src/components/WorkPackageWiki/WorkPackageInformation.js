import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";

class WorkPackageInformation extends Component {
  render() {
    const {
      number,
      name,
      scheduleStartDate,
      scheduleEndDate,
      transactionStartDate,
      transactionEndDate,
      numberOfDays,
      status,
      chargeable,
      billable,
      estimateEffort,
      description,
      location
    } = this.props.workPackageInfo;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            WorkPackage Information
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
                    <div>{number}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Name </div>
                  </td>
                  <td className="text-left">
                    <div>{name} </div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Schedule Start Date </div>
                  </td>
                  <td className="text-left">
                    <div>{scheduleStartDate}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Schedule End Date </div>
                  </td>
                  <td className="text-left">
                    <div>{scheduleEndDate}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Transaction Start Date </div>
                  </td>
                  <td className="text-left">
                    <div>{transactionStartDate}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Transaction End Date </div>
                  </td>
                  <td className="text-left">
                    <div>{transactionEndDate}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Number of Days</div>
                  </td>
                  <td className="text-left">
                    <div>{numberOfDays} </div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Status</div>
                  </td>
                  <td className="text-left">
                    <div>{status}</div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Chargeable </div>
                  </td>
                  <td className="text-left">
                    <div>{chargeable} </div>
                  </td>
                </tr>

                <tr>
                  <td className="basicinfo text-left">
                    <div>Billable </div>
                  </td>
                  <td className="text-left">
                    <div>{billable} </div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Estimate Effort </div>
                  </td>
                  <td className="text-left">
                    <div>{estimateEffort}</div>
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Description</td>
                  <td colSpan="3">
                    <Input type="textarea" rows="2" value={description} />
                  </td>
                </tr>

                <tr>
                  <td className=" basicinfo text-left">Location</td>
                  <td colSpan="3">
                    <Input type="textarea" rows="2" value={location} />
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

export default WorkPackageInformation;
