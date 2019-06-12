import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
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
import BigCalendar from "react-big-calendar";
import "../../views/CommonsComponents/Calender/Calendar.css";
import CustomCalendarToolbar from "../../views/CommonsComponents/Calender/CustomCalendarToolbar";

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
            {/* <DatePicker
              calendarClassName="w-100"
              selected={this.state.startDate}
              onChange={this.handleChange}
              className="form-control"
              showYearDropdown
              showMonthDropdown
              useShortMonthInDropdown
              inline
              todayButton={"Today"}
            /> */}
            <div style={{ height: 300 }}>
              <BigCalendar
                localizer={BigCalendar.momentLocalizer(moment)}
                events={[]}
                popup={true}
                components={{
                  toolbar: CustomCalendarToolbar
                }}
                step={30}
                views={["month", "week", "day"]}
                rtl={true}
              />
            </div>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default CalendarAside;
