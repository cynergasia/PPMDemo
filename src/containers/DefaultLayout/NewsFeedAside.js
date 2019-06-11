import React, { Component } from "react";
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

class NewsFeedAside extends Component {
  state = {
    activeTab: "1"
  };

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
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="icon-list" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={"div"}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Latest News
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-warning list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/7.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Notification<strong>Lucas</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />&nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin" /> Palo Alto, CA
                </small>
              </ListGroupItem>
              <ListGroupItem
                action
                tag="a"
                href="#"
                className="list-group-item-accent-info list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/4.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Skype with <strong>Megan</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar" />&nbsp; 4 - 5pm
                </small>
                <small className="text-muted">
                  <i className="icon-social-skype" /> On-line
                </small>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default NewsFeedAside;
