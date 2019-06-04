import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";

class Meetings extends Component {
  render() {
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
                <ListGroupItemHeading>Upcomming Meeting :</ListGroupItemHeading>
                <ListGroupItemText>
                  <Link to="#">20-Jun-2019 : Review Design with Client</Link>
                  <br />
                  <Link to="#">20-Jun-2019 : Review Design with Client </Link>
                  <br />
                  <Link to="#">More..</Link>
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem className="mt-3">
                <ListGroupItemHeading>
                  Review Past Meeting :
                </ListGroupItemHeading>
                <ListGroupItemText>
                  <Link to="#">
                    03-May-2019: Initial Requirement collection{" "}
                  </Link>{" "}
                  <br />
                  <Link to="#">15-May-2019: Requirement Review </Link> <br />
                  <Link to="#">More..</Link>
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
