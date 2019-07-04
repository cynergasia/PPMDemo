import React, { Component } from "react";
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
import { AppAsideToggler } from "@coreui/react";
import BigCalendar from "react-big-calendar";
import CustomCalendarToolbar from "../../views/CommonsComponents/Calender/CustomCalendarToolbar";
import eventsList from "../../views/CommonsComponents/Calender/eventsList";

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
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => this.props.toggleCalendar()}
            >
              {this.props.isCalendar ? (
                <AppAsideToggler
                  defaultOpen={true}
                  className="fa fa-close text-muted"
                  display="lg"
                />
              ) : (
                <i className="fa fa-close" aria-hidden="true" />
              )}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <ListGroup className="list-group-accent mb-3" tag={"div"}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small border-0">
                Calendar
              </ListGroupItem>
            </ListGroup>
            <div className="right-calendar">
              <BigCalendar
                localizer={BigCalendar.momentLocalizer(moment)}
                events={eventsList}
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
