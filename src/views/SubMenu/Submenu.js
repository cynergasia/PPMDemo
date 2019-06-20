import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import $ from "jquery";
export const menulist =[
    {comment:["Comment","activityLogRef","cui-comment-square"]},
    {wbs:["WBS","workPackageRef","fa fa-sitemap"]},
    {issue_changes:["Issues/Changes","issueChangesRef","fa fa-refresh"]},
    {meeting_minutes:["Meeting Minutes","meetingMinutesRef","fa fa-pencil-square"]},
    {finanical:["Financials","financialsRef","fa fa-bar-chart"]},
    {activity_log:["Activity Log","activityLogRef","fa fa-clipboard"]},
    {follow:["Follow","dummy","fa fa-rss"]}  
];

export const keylist=["comment","wbs","issue_changes","meeting_minutes","finanical","activity_log","follow"];

class Submenu extends Component {
    state = {
        comment: true,
        wbs: true,
        issue_changes: true,
        meeting_minutes: true,
        finanical: true,
        activity_log: true,
        follow:true
      };

      componentDidMount() {
        this.setState({...this.props.isMenu})
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount=()=>{
          window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll=(event)=> {
       
              // var position = $('.is-affixed').children().first().position();
              // var widthfiex = $('.is-affixed').children().first().width();
              // var asidemenuwidth = $('.aside-menu').width();

            

            var header = document.getElementById("navbar");
            var sticky = header.offsetTop;
           // var position = $('.aside-menu-lg-show .sidebar__inner').position();
           // var flag=0;
            console.log(window.pageXOffset,"console.log",sticky);
            if (window.pageYOffset > sticky) {             
              header.classList.add("sticky");
                // if(position && flag===0)
                // {                
                //   $('.is-affixed').children().first().css( "width",374);
                //   //$('.is-affixed').children().first().css( "left");
                //   flag = 1;
                
                // }           
             
            } else {
           
              header.classList.remove("sticky");

            }
        }
    scrollTo = ({ current: ref }) => {
      let scrollRef = ReactDOM.findDOMNode(ref);
      let scrollOptions = {
        left: 0,
        top:25,
        top: scrollRef.offsetTop,
        behavior: "smooth"
      };
      window.scrollTo(scrollOptions);
    };
    
    
 
    render() {  
        const { refs , name } = this.props;    
        return (
        <React.Fragment>
          <div className="sub-navbar" id="navbar" aria-label="breadcrumb">
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" area-current="page">
                <i className="fa fa-map-marker" /> Extensions N/Cape Mall
                Phase 3 (60453005) {name}
              </li>
            </ol>
            <ol className="breadcrumb left-breadcrumb">
              {/* <li className="nav-head active" aria-current="page">
                <Link exact to="/500">
                  <i className="fa fa-edit" /> Edit
                </Link>
              </li> */}
              {
                  keylist.map((list,index) => (  
                  this.state[list] && 
                    <li className="nav-head active position-sticky" aria-current="page">
                      <Link
                        onClick={() => this.scrollTo(refs[menulist[index][list][1]])}
                        className="cursor-pointer">
                        <i className={menulist[index][list][2]} /> {menulist[index][list][0]} 
                      </Link>
                    </li>   
                ))
              }                
            </ol>
          </div>
        </React.Fragment>
      )
    }
}
export default Submenu