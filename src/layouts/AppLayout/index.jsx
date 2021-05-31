import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutLayout } from "layouts/AboutLayout";
import { UsersLayout } from "layouts/UsersLayout";
import { HomeLayout } from "layouts/HomeLayout";

import { Header } from "components/Header";
import { Layout } from "components/Layout";

export const AppLayout = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Switch>
          <Route path="/about">
            <AboutLayout />
          </Route>
          <Route path="/users">
            <UsersLayout />
          </Route>
          <Route path="/">
            <HomeLayout />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
