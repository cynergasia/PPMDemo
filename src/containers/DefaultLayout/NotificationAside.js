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
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppAsideToggler } from "@coreui/react";
import database from "../../database/database";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class NotificationAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleClick = () => {
    this.props.toggleNotification();
    window.location.hash = "/500";
  };

  render() {
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => this.props.toggleNotification()}
            >
              {this.props.isNotification ? (
                <AppAsideToggler
                  className="fa fa-close text-muted"
                  defaultOpen={true}
                  display="lg"
                />
              ) : (
                <i className="fa fa-close" aria-hidden="true" />
              )}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup
              className="list-group-accent project-wiki-basicinfo"
              tag={"div"}
            >
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Notification
              </ListGroupItem>
              {database.globalNotification.map(item => (
                <ListGroupItem
                  action
                  className="list-group-item-accent-warning list-group-item-divider"
                  onClick={this.handleClick}
                >
                  <div>{item.title}</div>
                  <small className="text-muted mr-3">
                    <i className="icon-calendar" />&nbsp;{item.due_date}
                  </small>
                </ListGroupItem>
              ))}
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

NotificationAside.propTypes = propTypes;
NotificationAside.defaultProps = defaultProps;

export default NotificationAside;
