import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";
class IssueDescription extends Component {
  render() {
    const {
      name,
      number,
      description,
      issueType,
      impacts,
      days,
      hours,
      cost
    } = this.props.issueDescription;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Description
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" />
              </span>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive bordered>
              <tbody>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Issue Number </div>
                  </td>
                  <td className="text-left">
                    <div>{number}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Issue Name </div>
                  </td>
                  <td className="text-left">
                    <div>{name}</div>
                  </td>
                </tr>
                <tr>
                  <td className=" basicinfo text-left">Description</td>
                  <td colSpan="3">
                    <Input type="textarea" rows="2" value={description} />
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Issue Type</div>
                  </td>
                  <td className="text-left" colSpan="3">
                    <div>
                      <select
                        className="custom-select"
                        defaultValue="Design Flow"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        {issueType.map((item, index) => (
                          <option key={index}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left" rowSpan="3">
                    <div>Impacts </div>
                  </td>
                  <td className="text-left" rowSpan="3">
                    <div>{impacts}</div>
                  </td>
                  <td className="basicinfo text-left">
                    <div>Days </div>
                  </td>
                  <td className="text-left">
                    <div>{days}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Hours </div>
                  </td>
                  <td className="text-left">
                    <div>{hours}</div>
                  </td>
                </tr>
                <tr>
                  <td className="basicinfo text-left">
                    <div>Cost </div>
                  </td>
                  <td className="text-left">
                    <div>{cost}</div>
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

export default IssueDescription;
