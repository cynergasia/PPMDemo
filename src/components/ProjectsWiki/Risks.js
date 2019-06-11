import React, { Component } from "react";
import { Card, CardHeader, CardBody, ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText } from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
class Risks extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Risks
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
          <ListGroup>
                <ListGroupItem>  
                <ListGroupItemText>
                <ListGroupItemHeading>High Risk Items : </ListGroupItemHeading> 
                 
                  <Link to={routesURL.PAGE_NOT_FOUND}> Risk1</Link><br/>
                  <Link to={routesURL.PAGE_NOT_FOUND}> Risk9</Link><br/>                
               
                  <br />
                  <ListGroupItemHeading>  Medium Risk Items : </ListGroupItemHeading> 
                 
                  <Link to={routesURL.PAGE_NOT_FOUND}>Risk4</Link><br/>
                  <Link to={routesURL.PAGE_NOT_FOUND}> Risk0</Link><br/>
                 
                  <br />                 
                  <Link to={routesURL.PAGE_NOT_FOUND}> More... </Link>               
                  </ListGroupItemText>
                  </ListGroupItem>                 
                 </ListGroup>          
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Risks;
