import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import { AppAside, AppFooter, AppHeader } from "@coreui/react";
// sidebar nav config

// routes config
import routes from "../../routes";
import { routesURL } from "../../constant/routesURL";

// const DefaultAside = React.lazy(() => import("./DefaultAside"));
const ChatAside = React.lazy(() => import("./ChatAside"));
 const NotificationAside = React.lazy(() => import("./NotificationAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
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
            <DefaultHeader title={title} />
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
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <ChatAside />
            </Suspense>
          </AppAside> */}
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <NotificationAside />
            </Suspense>
          </AppAside>
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
