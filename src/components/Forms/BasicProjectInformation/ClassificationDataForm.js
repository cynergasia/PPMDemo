import React, { Component } from 'react'
import { Col, FormGroup, Input, Button } from 'reactstrap'
import DatePicker from 'react-datepicker'

class ClassificationDataForm extends Component {
  render() {
    const { id, index, classification } = this.props
    return (
      <form id={`classification-${id}`} className="row">
        <Col lg="3">
          <FormGroup>
            <label>Category</label>
            <Input
              type="select"
              name="category"
              className="custom-select"
              onChange={({ target: { name, value } }) =>
                this.props.handleChangeClassification(index, name, value)
              }
              value={classification.category}
            >
              <option disabled selected>
                Select
              </option>
              <option>Business Line</option>
              <option>Sub-Business Line</option>
              <option>Fedral Project</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg="3">
          <FormGroup>
            <label>Value</label>
            <Input
              type="text"
              name="value"
              value={classification.value}
              onChange={({ target: { name, value } }) =>
                this.props.handleChangeClassification(index, name, value)
              }
            />
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label>
              Start Date <b className="text-danger">*</b>
            </label>
            <DatePicker
              className="form-control"
              name="startDate"
              selected={classification.startDate}
              selectsStart
              startDate={classification.startDate}
              endDate={classification.endDate}
              onChange={date =>
                this.props.handleChangeClassification(index, 'startDate', date)
              }
            />
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <label>
              End Date <b className="text-danger">*</b>
            </label>
            <DatePicker
              name="endDate"
              className="form-control"
              selected={classification.endDate}
              selectsEnd
              startDate={classification.startDate}
              endDate={classification.endDate}
              minDate={classification.startDate}
              onChange={date =>
                this.props.handleChangeClassification(index, 'endDate', date)
              }
            />
          </FormGroup>
        </Col>
        <Col lg="1" className="ml-auto">
          <FormGroup>
            <label htmlFor="" />
            <Button
              color="danger"
              className="form-control"
              onClick={() => this.props.deleteClassification(index)}
            >
              X
            </Button>
          </FormGroup>
        </Col>
      </form>
    )
  }
}

export default ClassificationDataForm
