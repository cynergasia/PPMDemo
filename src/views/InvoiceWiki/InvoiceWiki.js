import React, { Component } from "react";
import { Row} from "reactstrap";
import InvoiceDescription from "../../components/InvoiceWiki/InvoiceDescription";
import InvoiceActivities from "../../components/InvoiceWiki/InvoiceActivities";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import Attachments from "../../components/Attachments";
import RecordInformation from "../../components/RecordInformation";
import SubMenu from "../SubMenu/Submenu";
import data from "../../database/invoicelist_database";

class InvoiceWiki extends Component {
  descriptionRef = React.createRef();
  approvedStatusRef = React.createRef();
  activityLogRef = React.createRef();

  render() {
    console.log(data().audit_info);
    return (
      <React.Fragment>        
        <SubMenu
          refs={{
            descriptionRef: this.descriptionRef,
            activityLogRef: this.activityLogRef,  
            approvedStatusRef:this.approvedStatusRef      
          }}
          isMenu={{
            project:false,
            finanical: false,          
            wbs: false,
            meeting_minutes:false,
            issue_changes: false,
            deliverable: false,
            work_package: false,         
          }}
          link={"invoiceWiki"}         
        />

        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <div className="col-12" ref={this.descriptionRef}>
                <InvoiceDescription />
              </div>
              <div className="col-12" ref={this.approvedStatusRef} >
                <InvoiceActivities activities={data().invoiceActivites} />
              </div>
              <div className="col-12">
                <Attachments />
              </div>
              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog />
              </div>
            </Row>
          </div>
          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecordInformation
                  isScheduleinfo={false}
                  isWorkflowinfo={false}
                  record_information={data().record_information}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InvoiceWiki;
