import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

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
    isNewsFeed: false
  };

  state = { ...this.initialState };

  toggleChat = () => {
    this.setState({
      ...this.initialState,
      isChat: !this.state.isChat
    });
  };

  toggleNotification = () => {
    this.setState({
      ...this.initialState,
      isNotification: !this.state.isNotification
    });
  };

  toggleCalendar = () => {
    this.setState({
      ...this.initialState,
      isCalendar: !this.state.isCalendar
    });
  };

  toggleMisc = () => {
    this.setState({
      ...this.initialState,
      isMisc: !this.state.isMisc
    });
  };

  toggleNewsFeed = () => {
    this.setState({
      ...this.initialState,
      isNewsFeed: !this.state.isNewsFeed
    });
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

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
        <div className="app-body">
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
            <Container fluid>
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
                <NotificationAside />
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
