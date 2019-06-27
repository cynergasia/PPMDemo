import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

class Meetings extends Component {
  render() {
    console.log(this.props.meetingList);
    const { meetingList } = this.props;
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Meetings
            <div className="card-header-actions">
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>Upcoming Meeting :</ListGroupItemHeading>
                {meetingList.map(
                  (item, index) =>
                    item.status === "upcoming" && (
                      <ListGroupItemText className="mb-0" key={index}>
                        <Link to={routesURL.MEETING + item.m_id}>
                          {item.displaydate} {item.subject}
                        </Link>
                      </ListGroupItemText>
                    )
                )}
                <ListGroupItemText>
                  <Link to={routesURL.MEETING_LIST + "upcoming"}>More..</Link>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem className="mt-3">
                <ListGroupItemHeading>
                  Review Past Meeting :
                </ListGroupItemHeading>
                {meetingList.map(
                  (item, index) =>
                    item.status === "past" && (
                      <ListGroupItemText className="mb-0" key={index}>
                        <Link to={routesURL.MEETING + item.m_id}>
                          {item.displaydate} {item.subject}
                        </Link>
                      </ListGroupItemText>
                    )
                )}
                <ListGroupItemText>
                  <Link to={routesURL.MEETING_LIST + "past"}>More..</Link>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Meetings;
