import React, { Component } from "react";
import { Card, CardHeader, CardBody, TabContent, TabPane,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

export class ActivityLog extends Component {
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
    const { activeTab } = this.state;
    return (
      <React.Fragment>
        <Card>         
          <CardHeader className="cardtabsboxs">
            <ul class="nav nav-tabs">
            
              <li className="nav-item">
                <a data-toggle="tab" 
                className={`${
                  activeTab === "1" ? "active nav-link" : "nav-link"
                  }`}
                onClick={() => this.toggle("1")}> Comments</a>
              </li>

              <li className="nav-item">
                <a data-toggle="tab" className={`${
                  activeTab === "2" ? "active nav-link" : "nav-link"
                  }`}
                onClick={() => this.toggle("2")}>Activity Log</a>
             </li>
            
            </ul>


            <div className="card-header-actions">             
              <i className="fa fa-plus-circle mr-2" />
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab} className="border-0">
              <TabPane tabId="1">
              <ListGroup>
                <ListGroupItem>  
                <ListGroupItemText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               
                  </ListGroupItemText>
                  </ListGroupItem>                 
                 </ListGroup>            
                <br />
              
              </TabPane>


              <TabPane tabId="2">

              <ListGroup>
                <ListGroupItem>  
                <ListGroupItemText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              
                  </ListGroupItemText>
                  </ListGroupItem>                 
                 </ListGroup>                   
              </TabPane>              
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ActivityLog;
