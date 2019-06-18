import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Input,
  FormGroup,
  Button,
  Table,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import Modal from "../../helper/Modal";
import wikidata from "./projectwikidata";

const intialState = {
  isProjectInfo: false,
  //isProjectDetail: false,
  isTeamMember: false,
  isClassification: false,
  isplusclass1: false,
  //isplusclass2: false,
  isplusclass3: false,
  isplusclass4: false
};

let data = [];

wikidata.basicInfo.forEach(item => {
  data.push({
    project_name: item.project_name,
    project_number: item.project_number,
    project_type: item.project_type,
    opportunity_number: item.pportunity_number,
    organization: item.organization,
    federal_project: item.federal_project,
    currency: item.currency,
    partnering_needed: item.partnering_needed,
    stage: item.stage,
    project_m_nager: item.project_m_nager,
    project_approver: item.project_approver,
    p_l_manager: item.p_l_manager,
    region: item.region,
    available_to_copy: item.available_to_copy,
    type: item.type
  });
});

class BasicInformation extends Component {
  state = { ...intialState };
  state = {
    modal: false,
    basicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders.",
    editBasicProjectInfo:
      "This project has 6 internal stakeholders and 2 external stakeholders."
  };
  toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

  toggleInfo = () => {
    this.setState({
      ...intialState,
      isProjectInfo: !this.state.isProjectInfo,
      isplusclass1: !this.state.isplusclass1
    });
  };
  // toggleDetail = () => {
  //   this.setState({
  //     ...intialState,
  //     isProjectDetail: !this.state.isProjectDetail,
  //     isplusclass2: !this.state.isplusclass2
  //   });
  // };
  toggleTeamMember = () => {
    this.setState({
      ...intialState,
      isTeamMember: !this.state.isTeamMember,
      isplusclass3: !this.state.isplusclass3
    });
  };
  toggleClassification = () => {
    this.setState({
      ...intialState,
      isClassification: !this.state.isClassification,
      isplusclass4: !this.state.isplusclass4
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () =>
    this.setState({
      basicProjectInfo: this.state.editBasicProjectInfo,
      modal: false
    });

  render() {
    const { modal,  editBasicProjectInfo } = this.state;
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
            {/* <pre className="m-0">{basicProjectInfo}</pre> className="project-wiki-basicinfo"  */}
            
            <ListGroup>
              <ListGroupItem>  
              <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleInfo()}
                >
                  <i
                    className={
                      this.state.isplusclass1
                        ? "fa-plus-minus fa fa-minus-square-o mr-2"
                        : "fa-plus-minus fa fa-plus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Project Information</span>
                </ListGroupItemHeading>
                <ListGroupItemText>   
                <Collapse isOpen={this.state.isplusclass1}>    
                 <Table
                  responsive 
                  bordered                 
                    >                         
                
                  <tbody>                  
                    <tr>
                      <td className="basicinfo text-left"><div>Project Number </div></td>
                      <td className="text-left"><div>60453005</div></td>
                      <td className="basicinfo text-left"><div>Project Name </div></td>
                      <td className="text-left"><div>Extensions N/Cape Mall Phase 3 </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-left"><div>Project Type </div></td>
                      <td className="text-left"><div>Contract</div></td>
                      <td className="basicinfo text-left"><div>Opportunity Number </div></td>
                      <td className="text-left"><div>SFOPP00030</div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-left"><div>Organization </div></td>
                      <td className="text-left"><div>80.ACM.LAX.1</div></td>
                      <td className="basicinfo text-left"><div>Federal Project </div></td>
                      <td className="text-left"><div>No</div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-left"><div>Currency </div></td>
                      <td className="text-left"><div>USD </div></td>
                      <td className="basicinfo text-left"><div>Partnering Needed </div></td>
                      <td className="text-left"><div>No </div></td>
                    </tr>

                    <tr>
                        <td className="basicinfo text-left"><div>Stage </div></td>
                        <td className="text-left"><div>Execution </div></td>
                        <td className="basicinfo text-left"><div>Project Manager </div></td>
                        <td className="text-left"><div>Suresh Padmanabhan(SP) </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-left"><div>Project Approver </div></td>
                      <td className="text-left"><div>Neeraj Garg (NG) </div></td>
                      <td className="basicinfo text-left"><div>P&L Manager </div></td>
                      <td className="text-left"><div>Arindam Mukherjee(AM) </div></td>
                    </tr>

                    <tr>
                      <td className="basicinfo text-left"><div>Region </div></td>
                      <td className="text-left"><div>United States </div></td>
                      <td className="basicinfo text-left"><div>Available to Copy </div></td>
                      <td className="text-left"><div>Yes</div></td>
                    </tr>
                    
                    <tr>
                    <td className="basicinfo text-left"><div>Type </div></td>
                    <td className="text-left"><div>Contract </div></td>
                     
                    </tr>   
                    <tr>
                      <td className=" basicinfo text-left">Project Details</td>
                      <td colSpan="3">
                      <Input type="textarea" rows="2" value="Extensions N/Cape Mall Phase 3" /> 
                      </td>
                    </tr>                
           
                </tbody>
                </Table>
                </Collapse>
                </ListGroupItemText>
                </ListGroupItem> 
                </ListGroup>
         
             

              {/* Team Members */}
              <ListGroup>
                <ListGroupItem>

                  <ListGroupItemHeading
                    className="cursor-pointer"
                    onClick={() => this.toggleTeamMember()}
                  >
                    <i
                      className={
                        this.state.isplusclass3
                          ? "fa-plus-minus fa fa-minus-square-o mr-2"
                          : "fa-plus-minus fa fa-plus-square-o mr-2"
                      }
                    />
                    <span className="text-primary">Team Members</span>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <Collapse isOpen={this.state.isplusclass3}>
                      <Table
                        hover
                        responsive
                        className="table-outline mb-0 d-none d-sm-table"
                      >
                        <thead className="thead-light">
                       
                          <tr>
                            <th className="text-left">Person</th>
                            <th className="text-left">Role</th>
                            <th className="text-left">Start Date</th>
                            <th className="text-left">End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <div>Suresh Padmanabhan </div>
                            </td>
                            <td className="text-left">
                              <div>Project Manager </div>
                            </td>
                            <td className="text-left">
                              <div>01-01-2019 </div>
                            </td>
                            <th className="text-left">02-16-2020</th>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <div>Neeraj Garg </div>
                            </td>
                            <td className="text-left">
                              <div>Project Approver </div>
                            </td>
                            <td className="text-left">
                              <div>01-01-2019 </div>
                            </td>
                            <th className="text-left">02-16-2020</th>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <div>Arindam Mukherjee</div>
                            </td>
                            <td className="text-left">
                              <div>P&L Manager </div>
                            </td>
                            <td className="text-left">
                              <div>01-01-2019 </div>
                            </td>
                            <th className="text-left">02-16-2020</th>
                          </tr>
                        </tbody>
                      </Table>
                    </Collapse>
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>

                <ListGroup>   
                <ListGroupItem> 
                <ListGroupItemHeading
                  className="cursor-pointer"
                  onClick={() => this.toggleClassification()}
                >
                  <i
                    className={
                      this.state.isplusclass4
                        ? "fa-plus-minus fa fa-minus-square-o mr-2"
                        : "fa-plus-minus fa fa-plus-square-o mr-2"
                    }
                  />
                  <span className="text-primary">Classification</span>
                </ListGroupItemHeading>
                <ListGroupItemText>   
                <Collapse isOpen={this.state.isplusclass4}>
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">                   
                   
                    <tr>
                      <th className="text-left">Category</th>
                      <th className="text-left">Value</th>
                      <th className="text-left">Start Date</th>
                      <th className="text-left">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-left"><div>Business Line </div></td>
                    <td className="text-left"><div>Transportation </div></td>
                    <td className="text-left"><div>01-01-2019 </div></td>
                    <th className="text-left">02-16-2020</th>                     
                  </tr>    
                  <tr>
                    <td className="text-left"><div>Sub-Business Line </div></td>
                    <td className="text-left"><div>Rail </div></td>
                    <td className="text-left"><div>01-01-2019 </div></td>
                    <th className="text-left">02-16-2020</th>                     
                  </tr>    
                  <tr>
                    <td className="text-left"><div>Fedral Project</div></td>
                    <td className="text-left"><div>No</div></td>
                    <td className="text-left"><div>01-01-2019 </div></td>
                    <th className="text-left">02-16-2020</th>                     
                  </tr>    
                  </tbody>
                  </Table>
                  </Collapse>
                  </ListGroupItemText>
                  </ListGroupItem>
                  </ListGroup>     
            
           
            
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default BasicInformation;
