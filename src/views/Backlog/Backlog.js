import React, { Component } from 'react';
import ActivityBacklog from '../../components/Backlog/BacklogActivity';
import ActivityResource from '../../components/Backlog/BacklogResource';
import ActivityUtilization from '../../components/Backlog/BacklogUtilization';
import database from '../../database/database.json';
import { Card, CardHeader, CardBody } from "reactstrap";

class Backlog extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      view: 'activity'
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  change = (e) => {
    this.setState({
      view: e.target.value
    })
  }
  render() {
    const { view } = this.state;
    let activity = database.activitybacklog;
    let resource = database.activityresource;
    let utilization = database.activityutilization;
    return (
      <React.Fragment>
        <div className="animated fadeIn row mt-4">
          <div className="col-12 col-lg-12">
            <div className="row">
              <div className="col-12">
                <Card>
                  <CardHeader>
                    Backlog
                  </CardHeader>
                  <CardBody>
                    <div>
                      <b className="ml-5">View By</b>
                      <select className="ml-2" id="lang" onChange={this.change} value={this.state.view}>
                        <option value="activity">Activity</option>
                        <option value="resource">Resource</option>
                        <option value="utilization">Utilization</option>
                      </select>
                    </div>
                    {view === 'activity' && <ActivityBacklog activity={activity} />}
                    {view === 'resource' && <ActivityResource resource={resource} />}
                    {view === 'utilization' && <ActivityUtilization utilization={utilization} />}
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Backlog;