import React from "react";
import { Input, NavLink } from "reactstrap";
import Modal from "../../helper/Modal";

class Popup extends React.Component {
  state = {
    isModal: false
  };

  toggle = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    const modelHeader = (
      <React.Fragment>
        <Input type="select" className="custom-select">
          <option disabled selected>
            Select
          </option>
          <option>Project</option>
          <option>Activities</option>
          <option>Deliverables</option>
          <option>Issues</option>
          <option>Change</option>
        </Input>
      </React.Fragment>
    );

    const modelBody = (
      <React.Fragment>
        <div className="mb-5" />
        <br />
        <div className="mb-5" />
        <br />
        <div className="mb-5" />
        <br />
        <div className="mb-5" />
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <NavLink onClick={this.toggle}>
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </NavLink>
        <Modal
          isOpen={this.state.isModal}
          toggle={this.toggle}
          header={modelHeader}
          body={modelBody}
        />
      </React.Fragment>
    );
  }
}

export default Popup;
