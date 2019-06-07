/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { AppSwitch } from "@coreui/react";
import { AppHeaderDropdown } from "@coreui/react";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};
class MiscAside extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <AppHeaderDropdown direction="down">
        <DropdownToggle nav>
          <i className="navbar-toggler-icon" aria-hidden="true" />
        </DropdownToggle>
        <DropdownMenu right style={{ right: "auto" }}>
          <DropdownItem>
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                  disabled
                />
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </AppHeaderDropdown>
    );
  }
}
MiscAside.propTypes = propTypes;
MiscAside.defaultProps = defaultProps;
export default MiscAside;
