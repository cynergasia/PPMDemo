import React, { Component } from "react";
import DatePicker from "react-datepicker";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import classNames from "classnames";

class CalendarAside extends Component {
  state = {
    startDate: new Date(),
    activeTab: "1"
  };
  handleChange = date => {};

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <ListGroup className="list-group-accent mb-3" tag={"div"}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Calendar
              </ListGroupItem>
            </ListGroup>
            <DatePicker
              calendarClassName="w-100"
              selected={this.state.startDate}
              onChange={this.handleChange}
              className="form-control"
              showYearDropdown
              showMonthDropdown
              useShortMonthInDropdown
              inline
              todayButton={"Today"}
            />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default CalendarAside;
