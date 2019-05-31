import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventsList from "./eventsList";
import CustomCalendarToolbar from './CustomCalendarToolbar'
import moment from "moment";
import "./Calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (<div style={{
      height: 450
    }}>
      <BigCalendar localizer={BigCalendar.momentLocalizer(moment)} events={eventsList} popup={true} step={30} components={{ toolbar: CustomCalendarToolbar }} views={["month", "week", "day"]}
        rtl={true}
      />
    </div>);
  }
}

export default Calendar;
