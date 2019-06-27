import React from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../constant/routesURL";
import { APP_DATE_FORMAT } from "../constant";
import moment from "moment";

const data = props => ({
  meetingList: [
    {
      m_id: "8e8b8006-145d-4505-aaac-528efcd36f44",
      number: (
        <Link
          to={routesURL.MEETING + "8e8b8006-145d-4505-aaac-528efcd36f44"}
          className="text-primary"
        >
          M1
        </Link>
      ),
      template: "Simple",
      recurring: "N",
      frequency: "",
      endon: "",
      date: new Date("07/25/19"),
      displaydate: "07/25/19",
      location: "Meeting Room",
      starttime: "13:00",
      duration: "1 hour",
      subject: "Meeting With Client",
      attendee: "@Arindam, @Suresh, @Neeraj, @Eric",
      status: "upcoming",
      description: "Please Use Skype Id: 678572, Password: 4321"
    },
    {
      m_id: "fd448da6-2441-479e-a245-30f4bb83e2c9",
      number: (
        <Link
          to={routesURL.MEETING + "fd448da6-2441-479e-a245-30f4bb83e2c9"}
          className="text-primary"
        >
          M2
        </Link>
      ),
      template: "Detail",
      recurring: "N",
      frequency: "",
      endon: "",
      date: new Date("07/27/19"),
      displaydate: "07/27/19",
      location: "",
      starttime: "11:00",
      duration: "1 hour",
      subject: "Meeting With Client",
      attendee: "",
      status: "upcoming",
      description: "Please Use Skype Id: 678572, Password: 4321"
    },
    {
      m_id: "f456c8b9-597f-4905-8dbd-d91045c11961",
      number: (
        <Link
          to={routesURL.MEETING + "f456c8b9-597f-4905-8dbd-d91045c11961"}
          className="text-primary"
        >
          M3
        </Link>
      ),
      template: "Professional",
      recurring: "Y",
      frequency: "Daily",
      endon: "12/31/19",
      date: new Date("06/25/19"),
      displaydate: "06/25/19",
      location: "",
      starttime: "10:00",
      duration: "30 minute",
      subject: "Internal Status Meeting",
      attendee: "",
      status: "past",
      description: "Please Use Skype Id: 678572, Password: 4321"
    },
    {
      m_id: "bd20636d-8890-4234-822b-54827ba56b63",
      number: (
        <Link
          to={routesURL.MEETING + "bd20636d-8890-4234-822b-54827ba56b63"}
          className="text-primary"
        >
          M4
        </Link>
      ),
      template: "Simple",
      recurring: "Y",
      frequency: "Monthly",
      endon: "12/31/19",
      date: new Date("06/19/19"),
      displaydate: "06/19/19",
      location: "",
      starttime: "15:00",
      duration: "2 hour",
      subject: "Design Review",
      attendee: "",
      status: "past",
      description: "Please Use Skype Id: 678572, Password: 4321"
    }
  ]
});

export default data;
