import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroup,
  Button,
  Table
} from "reactstrap";
import Modal from "../../helper/Modal";

class BasicInformation extends Component {
  state = {
    modal: false,
    basicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders.",
    editBasicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders."
  };
  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () =>
    this.setState({
      basicProjectInfo: this.state.editBasicProjectInfo,
      modal: false
    });
  render() {
    const { modal, basicProjectInfo, editBasicProjectInfo } = this.state;
    const modelBody = (
      <React.Fragment>
        <FormGroup>
          <Input
            type="textarea"
            name="editBasicProjectInfo"
            rows="4"
            value={editBasicProjectInfo}
            onChange={this.handleChange}
          />
          <div className="form-inline">
            <div className="ml-auto">
              <Button color="success" onClick={this.handleSubmit}>
                Edit & Save
              </Button>
              <Button
                color="danger"
                onClick={() => this.setState({ modal: false })}
              >
                Close
              </Button>
            </div>
          </div>
        </FormGroup>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Basic Project Information
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" onClick={this.toggle} />
              </span>
              <Modal
                isOpen={modal}
                toggle={this.toggle}
                header="Edit Basic Project Information"
                body={modelBody}
              />
            </div>
          </CardHeader>
          <CardBody>
            {/* <pre className="m-0">{basicProjectInfo}</pre> */}
            <div className="project-wiki-basicinfo" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar arcu quam, vitae elementum metus mattis non. Cras at sem in metus eleifend aliquet. Vivamus in rutrum libero. Pellentesque suscipit libero at risus accumsan malesuada. Suspendisse magna dui, porta eu semper et, faucibus ut arcu. Suspendisse laoreet pretium nisi, at gravida augue gravida nec. Curabitur ac ante non tellus imperdiet suscipit sit amet ac felis. Duis nec mollis turpis, euismod pharetra nisi. Nam ac ex molestie orci finibus maximus eu non lectus. Vestibulum et varius arcu. Vivamus laoreet nibh ac metus porta, id pulvinar tortor sollicitudin. Donec rhoncus dictum congue. Sed in lectus nunc.
               <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                  >
                  {/* <thead className="thead-light">
                   
                    <tr>
                      <th className="text-center">Due Date</th>
                      <th className="text-center">Project</th>
                      <th className="text-center">Notification</th>
                    </tr>
                  </thead> */}
                  <tbody>                  
                    <tr>
                      <td className="text-center"><div>4/22/2019</div></td>
                      <td className="text-center"><div>Project 4</div></td>
                      <td className="text-center"><div>Invoice Approval Pending</div></td>
                    </tr>            

                    <tr >
                      <td className="text-center"><div>4/22/2019</div></td>
                      <td className="text-center"><div>Project 5</div></td>
                      <td className="text-center"><div>Status Report Pending</div></td>
                    </tr>                    
                  </tbody>
                </Table>
       
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
