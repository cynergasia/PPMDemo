import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroup,
  Button
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
            <pre className="m-0">{basicProjectInfo}</pre>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
