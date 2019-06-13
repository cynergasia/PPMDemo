import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroup,
  Button,
  Table,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import Modal from "../../helper/Modal";
import wikidata from "./projectwikidata";

let data = [];

wikidata.basicInfo.forEach(item => {
  data.push({
      project_name  : item.project_name,
    project_number  : item.project_number,
      project_type  : item.project_type,
 opportunity_number : item.pportunity_number,
      organization  : item.organization,
   federal_project  : item.federal_project,
          currency  : item.currency,
 partnering_needed  : item.partnering_needed,
             stage  : item.stage,
   project_m_nager  : item.project_m_nager,
  project_approver  : item.project_approver,
       p_l_manager  : item.p_l_manager,
            region  : item.region,
 available_to_copy  : item.available_to_copy, 
             type   : item.type
  });
});


class BasicInformation extends Component {
  state = {
    modal: false,
    basicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders.",
    editBasicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders."
  };
  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () =>
    this.setState({
      basicProjectInfo: this.state.editBasicProjectInfo,
      modal: false
    });

  render() {
    const { modal, basicProjectInfo, editBasicProjectInfo } = this.state;
    const modelBody = (
      <React.Fragment>
        <FormGroup>
          <Input
            type="textarea"
            name="editBasicProjectInfo"
            rows="4"
            value={editBasicProjectInfo}
            onChange={this.handleChange}
          />
          <div className="form-inline">
            <div className="ml-auto">
              <Button color="success" onClick={this.handleSubmit}>
                Edit & Save
              </Button>
              <Button
                color="danger"
                onClick={() => this.setState({ modal: false })}
              >
                Close
              </Button>
            </div>
          </div>
        </FormGroup>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Basic Project Information
            <div className="card-header-actions">
              <span className="text-primary cursor-pointer">
                <i className="fa fa-pencil-square" onClick={this.toggle} />
              </span>
              <Modal
                isOpen={modal}
                toggle={this.toggle}
                header="Edit Basic Project Information"
                body={modelBody}
              />
            </div>
          </CardHeader>
          <CardBody>
            {/* <pre className="m-0">{basicProjectInfo}</pre> */}
            <div className="project-wiki-basicinfo" >  
            <ListGroup>
              <ListGroupItem>         
               <Table
               responsive 
               bordered                 
                >                         
                
                  <tbody>                  
                    <tr>
                      <td className="basicinfo text-center"><div>Project Number </div></td>
                      <td className="text-center"><div>6000001</div></td>
                      <td className="basicinfo text-center"><div>Project Number </div></td>
                      <td className="text-center"><div>Extensions N/Cape Mall Phase 3 </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-center"><div>Project Type </div></td>
                      <td className="text-center"><div>Contract</div></td>
                      <td className="basicinfo text-center"><div>Opportunity Number </div></td>
                      <td className="text-center"><div>SFOPP00030</div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-center"><div>Organization </div></td>
                      <td className="text-center"><div>80.ACM.LAX.1</div></td>
                      <td className="basicinfo text-center"><div>Federal Project </div></td>
                      <td className="text-center"><div>No</div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-center"><div>Currency </div></td>
                      <td className="text-center"><div>USD </div></td>
                      <td className="basicinfo text-center"><div>Partnering Needed </div></td>
                      <td className="text-center"><div>No </div></td>
                    </tr>

                    <tr>
                        <td className="basicinfo text-center"><div>Stage </div></td>
                        <td className="text-center"><div>Execution </div></td>
                        <td className="basicinfo text-center"><div>Project Manager </div></td>
                        <td className="text-center"><div>Suresh Padmanabhan(SP) </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-center"><div>Project Approve </div></td>
                      <td className="text-center"><div>Neeraj Garg (NG) </div></td>
                      <td className="basicinfo text-center"><div>P&L Manager </div></td>
                      <td className="text-center"><div>Arindam Mukherjee(AM) </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-center"><div>Region </div></td>
                      <td className="text-center"><div>United States </div></td>
                      <td className="basicinfo text-center"><div>Available to Copy </div></td>
                      <td className="text-center"><div>Yes</div></td>
                    </tr>
                    
                    <tr>
                    <td className="basicinfo text-center"><div>Type </div></td>
                    <td className="text-center"><div>Contract </div></td>
                     
                    </tr>                   
           
                </tbody>
                </Table>
                </ListGroupItem> 
                </ListGroup>

                <ListGroup>   
                <ListGroupItem> 
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">                   
                    <tr>
                      <th className="text-center">Project Details</th>
                      <th className="text-center"></th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center"><div>Extensions N/Cape Mall Phase 3 </div></td>
                    <td className="text-center"><div> </div></td>
                    <td className="text-center"><div> </div></td>                     
                  </tr>    
                  </tbody>

                  </Table>
                </ListGroupItem>   
                </ListGroup>
                <ListGroup>   
                <ListGroupItem> 

                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">                   
                  <tr>
                  <th className="text-center">Team Members</th>
                  <th className="text-center"></th>
                  <th className="text-center">Add Button</th>
                  <th className="text-center">Delete Button</th>
                  </tr>
                  <tr>
                    <th className="text-center">Person</th>
                    <th className="text-center">Role</th>
                    <th className="text-center">Start Date</th>
                    <th className="text-center">End Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center"><div>Suresh Padmanabhan </div></td>
                    <td className="text-center"><div>Project Manager </div></td>
                    <td className="text-center"><div>01-01-2019 </div></td>
                    <th className="text-center">16-02-2020</th>                     
                  </tr>
                  <tr>
                      <td className="text-center"><div>Neeraj Garg </div></td>
                      <td className="text-center"><div>Project Approver </div></td>
                      <td className="text-center"><div>01-01-2019 </div></td>
                      <th className="text-center">16-02-2020</th>                     
                  </tr>
                  <tr>
                      <td className="text-center"><div>Arindam Mukherjee</div></td>
                      <td className="text-center"><div>P&L Manager </div></td>
                      <td className="text-center"><div>01-01-2019 </div></td>
                      <th className="text-center">16-02-2020</th>                     
                  </tr>  
                  </tbody>
                  </Table>
                </ListGroupItem>   
                </ListGroup>
                <ListGroup>   
                <ListGroupItem> 
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">                   
                    <tr>
                      <th className="text-center">Classification</th>
                      <th className="text-center"></th>
                      <th className="text-center">Add Button</th>
                      <th className="text-center">Delete Button</th>
                    </tr>
                    <tr>
                      <th className="text-center">Category</th>
                      <th className="text-center">Value</th>
                      <th className="text-center">Start Date</th>
                      <th className="text-center">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center"><div>Business Line </div></td>
                    <td className="text-center"><div>Transportation </div></td>
                    <td className="text-center"><div>01-01-2019 </div></td>
                    <th className="text-center">16-02-2020</th>                     
                  </tr>    
                  <tr>
                    <td className="text-center"><div>Sub-Business Line </div></td>
                    <td className="text-center"><div>Rail </div></td>
                    <td className="text-center"><div>01-01-2019 </div></td>
                    <th className="text-center">16-02-2020</th>                     
                  </tr>    
                  <tr>
                    <td className="text-center"><div>Fedral Project</div></td>
                    <td className="text-center"><div>No</div></td>
                    <td className="text-center"><div>01-01-2019 </div></td>
                    <th className="text-center">16-02-2020</th>                     
                  </tr>    
                  </tbody>

                  </Table>
                </ListGroupItem>   
                </ListGroup>
       
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
