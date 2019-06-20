/* eslint-disable no-unused-vars */
import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
// import $ from "jquery";

import { AppAside, AppFooter, AppHeader } from "@coreui/react";
// sidebar nav config

// routes config
import routes from "../../routes";
import { routesURL } from "../../constant/routesURL";
import CalendarAside from "./CalendarAside";
import MiscAside from "./MiscAside";
import NewsFeedAside from "./NewsFeedAside";

// const DefaultAside = React.lazy(() => import("./DefaultAside"));

const ChatAside = React.lazy(() => import("./ChatAside"));
const NotificationAside = React.lazy(() => import("./NotificationAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  initialState = {
    isChat: false,
    isNotification: false,
    isCalendar: false,
    isMisc: false,
    isNewsFeed: false,
    position: null
  };

  state = { ...this.initialState };
  
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);
    // this.setState({
    //   transform: itemTranslate
    // });
    // this.scrollSidebar();
  };

  toggle = toggle => {
    this.setState({
      ...this.initialState,
      [`is${toggle}`]: !this.state[`is${toggle}`]
    });
  };

  toggleChat = () => this.toggle("Chat");

  toggleNotification = () => this.toggle("Notification");

  toggleCalendar = () => this.toggle("Calendar");

  toggleMisc = () => this.toggle("Misc");

  toggleNewsFeed = () => this.toggle("NewsFeed");

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  // scrollSidebar method
  // scrollSidebar=()=>{
  //   // alert("rip");
  //   // if($('.aside-menu-lg-show .sidebar__inner').position()){

  //   var position = $('.is-affixed').children().first().position();
  //   var widthfiex = $('.is-affixed').children().first().width();
  //   var asidemenuwidth = $('.aside-menu').width();

  //   if(this.state.isChat){

  //     $('.is-affixed').children().first().css( "left",  position.left + asidemenuwidth - 100);
  //     $('.is-affixed').children().first().css( "width", widthfiex + asidemenuwidth - 250);
  //     //alert("raj");
  //   }
  //   else{
  //     $('.is-affixed').children().first().css( "left", position.left - asidemenuwidth + 100);
  //     $('.is-affixed').children().first().css( "width", widthfiex - asidemenuwidth + 250);
  //     //alert("rip");
  //   }

  //   return false;
  //   // alert(asidemenuwidth);
  // }

  render() {
    const path = this.props.location.pathname;
    let currentpath = "/" + path.split("/")[1];

    let title = "";
    routes.forEach(route => {
      const newpath = route.path.split("/:id")[0];
      if (currentpath === newpath) {
        title = route.title;
        return true;
      }
    });
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader
              title={title}
              toggleChat={this.toggleChat}
              toggleNotification={this.toggleNotification}
              toggleCalendar={this.toggleCalendar}
              toggleMisc={this.toggleMisc}
              toggleNewsFeed={this.toggleNewsFeed}
              isChat={this.state.isChat}
              isNotification={this.state.isNotification}
              isCalendar={this.state.isCalendar}
              isMisc={this.state.isMisc}
              isNewsFeed={this.state.isNewsFeed}
            />
          </Suspense>
        </AppHeader>
        <div
          className="app-body"
          style={{ overflowY: "scroll", maxHeight: "calc(100vh - 96px)" }}
        >
          {/* <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar> */}
          <main className="main">
            {/* <AppBreadcrumb appRoutes={routes} router={router} /> */}
            <Container fluid className="position-relative">
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to={routesURL.DASHBOARD} />
                </Switch>
              </Suspense>
            </Container>
          </main>
          {this.state.isChat ? (
            <AppAside fixed className="animated slideInRight">
              <Suspense fallback={this.loading()}>
                <ChatAside />
              </Suspense>
            </AppAside>
          ) : (
            <AppAside className="animated slideOutRight" />
          )}
          {this.state.isNotification ? (
            <AppAside fixed className="animated slideInRight">
              <Suspense fallback={this.loading()}>
                <NotificationAside
                  toggleNotification={this.toggleNotification}
                />
              </Suspense>
            </AppAside>
          ) : (
            <AppAside className="animated slideOutRight" />
          )}
          {this.state.isCalendar ? (
            <AppAside fixed className="animated slideInRight">
              <Suspense fallback={this.loading()}>
                <CalendarAside />
              </Suspense>
            </AppAside>
          ) : (
            <AppAside className="animated slideOutRight" />
          )}
          {this.state.isMisc ? (
            <AppAside fixed className="animated slideInRight">
              <Suspense fallback={this.loading()}>
                <MiscAside />
              </Suspense>
            </AppAside>
          ) : (
            <AppAside className="animated slideOutRight" />
          )}
          {this.state.isNewsFeed ? (
            <AppAside fixed className="animated slideInRight">
              <Suspense fallback={this.loading()}>
                <NewsFeedAside />
              </Suspense>
            </AppAside>
          ) : (
            <AppAside className="animated slideOutRight" />
          )}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
