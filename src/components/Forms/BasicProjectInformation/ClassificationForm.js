import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import ClassificationDataForm from "./ClassificationDataForm";

class ClassificationForm extends Component {
  state = {
    classifications: [
      {
        id: 1,
        category: "",
        value: "",
        startDate: new Date(),
        endDate: new Date()
      }
    ]
  };
  deleteClassification = id => {
    console.log(id);
    let { classifications } = this.state;
    classifications.splice(id, 1);
    this.setState({ classifications });
  };

  addClassification = () => {
    const { classifications } = this.state;
    let classification = {
      id: Math.floor(Math.random() * Math.floor(100)),
      category: "",
      value: "",
      startDate: new Date(),
      endDate: new Date()
    };
    classifications.push(classification);
    this.setState({ classifications });
  };

  handleChangeClassification = (index, name, value) => {
    let { classifications } = this.state;
    classifications[index][name] = value;
    this.setState({ classifications });
  };

  render() {
    const { classifications } = this.state;
    return (
      <React.Fragment>
        <div
          className="btn btn-primary mt-0"
          onClick={() => this.addClassification()}
        >
          Add
        </div>
        {classifications.map((classification, index) => (
          <ClassificationDataForm
            id={index}
            key={index}
            index={index}
            classification={classification}
            handleChangeClassification={this.handleChangeClassification}
            deleteClassification={this.deleteClassification}
          />
        ))}
        <Row>
          <Col lg="12">
            <div className="text-center">
              <Button color="danger">Close</Button>
              <Button color="primary">Save</Button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ClassificationForm;
