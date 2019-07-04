import React, { Component } from "react";
import { Card, CardHeader, CardBody, Table, Input } from "reactstrap";
import data from "../../database/invoicelist_database";
class InvoiceDescription extends Component {
  render() {
    // var data = data().invoiceDetails;
    // console.log("list",data().invoiceDetails);
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Invoice Description
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" />
              </span>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <tr>
                <td className="basicinfo text-left">
                  <div>Invoice Number</div>
                </td>
                <td className="text-left">
                  <div>1004</div>
                </td>
                <td className="basicinfo text-left">
                  <div>Customer</div>
                </td>
                <td className="text-left">
                  <div>SHELL</div>
                </td>
              </tr>
            </Table>
            <br />
            <Table responsive>
              <tr>
                <td className="basicinfo">
                  <div>Project Number</div>
                </td>
                <td className="basicinfo">
                  <div>Purchase Order</div>
                </td>
                <td className="basicinfo">
                  <div>Billing Period</div>
                </td>
                <td className="basicinfo">
                  <div>Invoice Date</div>
                </td>
                <td className="basicinfo">
                  <div>Terms</div>
                </td>
                <td className="basicinfo">
                  <div>Due Date</div>
                </td>
                <td className="basicinfo">
                  <div>Total Amount</div>
                </td>
              </tr>

              <tr>
                <td>
                  <div>60453005</div>
                </td>
                <td>
                  <div>PO1001</div>
                </td>
                <td>
                  <div>04-30-2019</div>
                </td>
                <td>
                  <div>05-01-2019</div>
                </td>
                <td>
                  <div>NET60</div>
                </td>
                <td>
                  <div>07-30-2019</div>
                </td>
                <td>
                  <div>USD 10,000.00</div>
                </td>
              </tr>
            </Table>
            <br />
            <Table responsive>
              <tr>
                <td className="basicinfo" colSpan="4">
                  <div>Invoice Comments</div>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <div>
                    <Input
                      type="textarea"
                      rows="3"
                      defaultValue="Please contact Suresh Padmanabhan if you need additional information on this invoice."
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="basicinfo">
                  <div>Details</div>
                </td>
                <td className="basicinfo">
                  <div>Hours</div>
                </td>
                <td className="basicinfo">
                  <div>Rate</div>
                </td>
                <td className="basicinfo">
                  <div>Amount</div>
                </td>
              </tr>
              {data().invoiceDetails.map((invoice, index) => (
                <tr key={index}>
                  <td>
                    <div>{invoice.Details}</div>
                  </td>
                  <td>
                    <div>{invoice.Hours}</div>
                  </td>
                  <td>
                    <div>{invoice.Rate}</div>
                  </td>
                  <td>
                    <div>{invoice.Amount}</div>
                  </td>
                </tr>
              ))}
            </Table>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default InvoiceDescription;
