import React from "react";
import changeCase from "change-case";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";


import Header from "./Header";
import Layout from "../blocks/layout";
import Content from "../blocks/RouteContent";
import RouteContainer from "../blocks/RouteContainer";

const App = ({ children, location: { pathname } }) => {
  const namearray = pathname.split("/");
  const name = changeCase.sentence(`${namearray[namearray.length - 1]}`);
  return (
    <Layout>
      {/* <Layout.Sidebar>
        <Logo />
      </Layout.Sidebar> */}
      <Layout.Main>
        <RouteContainer>
          <Header content={name} />
          <Content>{children}</Content>
        </RouteContainer>
      </Layout.Main>
    </Layout>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default withRouter(App);
